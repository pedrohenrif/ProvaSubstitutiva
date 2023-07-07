import { Link } from "react-router-dom";
import React from 'react';


function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cadastrar">Cadastrar</Link>
        </li>
        <li>
          <Link to="/listar">Listar</Link>
        </li>
        <li>
          <Link to="/remover">Remover</Link>
        </li>
      </ul>
    </nav>
    
  );
}

export default Nav;