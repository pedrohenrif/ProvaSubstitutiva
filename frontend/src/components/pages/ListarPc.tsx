import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListarPc() {
  const [pc, setpc] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333")
      .then((resposta) => {
        setpc(resposta.data.dados);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <div>
      <h1>Listagem de Despesas</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {pc.map((pc: any) => (
            <tr>
              <td>{pc.id}</td>
              <td>{pc.dono}</td>
              <td>{pc.placamae}</td>
              <td>{pc.processador}</td>
              <td>{pc.memoria}</td>
              <td>{pc.armazenamento}</td>
              <td>{pc.fonte}</td>
              <td>{pc.criadoem}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarPc;