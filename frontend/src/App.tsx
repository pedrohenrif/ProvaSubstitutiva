import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from "./components/layout/Nav";
import { Outlet } from "react-router-dom";


function App() {


  return (
    <div className="App">
      <Nav/>
      <Outlet />
    </div>
  );
}

export default App;
