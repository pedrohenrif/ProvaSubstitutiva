import { Pc } from "../models/Pc.Models";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export class PcController {
  
  async cadastrar(request: Request, response: Response): Promise<Response> {
    let pc: Pc = new Pc();
    
        pc.dono = request.body.dono;
        pc.placamae = request.body.placamae;
        pc.processador = request.body.processador;
        pc.memoria = Number.parseInt(request.body.memoria);
        pc.armazenamento = request.body.armazenamento;
        pc.fonte = request.body.fonte;
        pc.criadoem = request.body.criadoem;
    
        
    
        const pcCadatrada = await prisma.cadastro.create({
          data: {
            dono: pc.dono,
            placamae: pc.placamae,
            processador: pc.processador,
            memoria: pc.memoria,
            armazenamento: pc.armazenamento,
            fonte: pc.fonte,
            criadoem: pc.criadoem
          },
        });
    
        return response.status(201).json({ message: "Despesa cadastrada!", dados: pcCadatrada });
      }
    
      async listar(request: Request, response: Response) : Promise<Response>{
        try {
          const listaPc = await prisma.cadastro.findMany()
    
          return response.status(200).json({
            message: "Lista de cadastro", lista : listaPc
          })
        } catch (error) {
          return response.status(404).json({
            message: "Lista não encontrada", erro : error
          })
        }
      }

      async deletar(request: Request, response: Response): Promise<Response> {
        try {
          const cadastro = await prisma.cadastro.delete({
            where: {
              id: Number.parseInt(request.params.id),
            },
          });
          return response.status(200).json({ data: cadastro });
        } catch (error) {
          return response.status(404).json({ message: "Produto não encontrado!" });      
        }
      }
    
    }
    
    export default PcController;