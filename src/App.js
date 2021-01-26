import React from "react";
import Sidebar from "./Sidebar";
import './App.css';
import Chat from "./Chat";

function App() {


  return (
    <div className="app">
        <>
          <Sidebar />
          <Chat />
        </>

    </div>
  );
}

export default App;
