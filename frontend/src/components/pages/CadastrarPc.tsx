import axios from "axios";
import { useState } from "react";
import { Pc } from "../../models/PcModels";

function CadastroPc() {
  const [dono, setdono] = useState("");
  const [placamae, setPlacamae] = useState("");
  const [processador, setProcessador] = useState("");
  const [memoria, setMemoria] = useState("");
  const [armazenamento, setArmazenamento] = useState("");
  const [fonte, setFonte] = useState("");
  const [criadoem, setCriadoem] = useState("");

  function enviar() {
    let pc: Pc = new Pc();
    pc.dono = dono;
    pc.placamae = placamae;
    pc.processador = processador;
    pc.memoria = Number.parseInt(memoria);
    pc.armazenamento = armazenamento;
    pc.fonte = fonte;
    pc.criadoem = criadoem;

    axios
      .post("http://localhost:3333/cadastrar", pc)
      .then((resposta) => {
        console.log(resposta.data.mensagem);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }

  return (
    <div>
      <h1> Cadastrar Despesa</h1>
      <div>
        <label>Dono:</label>
        <input type="text" onChange={(event: any) => setdono(event.target.value)} />
      </div>
      <div>
        <label>Placa Mae:</label>
        <input type="text" onChange={(event: any) => setPlacamae(event.target.value)} />
      </div>
      <div>
        <label>Processador:</label>
        <input type="text" onChange={(event: any) => setProcessador(event.target.value)} />
      </div>
      <div>
        <label>Memória:</label>
        <input type="text" onChange={(event: any) => setMemoria(event.target.value)} />
      </div>
      <div>
        <label>Armazenamento:</label>
        <input type="text" onChange={(event: any) => setArmazenamento(event.target.value)} />
      </div>
      <div>
        <label>Fonte:</label>
        <input type="text" onChange={(event: any) => setFonte(event.target.value)} />
      </div>
      <div>
        <label>Criado em:</label>
        <input type="date" onChange={(event: any) => setCriadoem(event.target.value)} />
      </div>
      
      <div>
        <button onClick={enviar}>Cadastrar</button>
      </div>
    </div>
  );
}

export default CadastroPc;