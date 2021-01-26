import React from "react";
import Sidebar from "./Sidebar";
import './App.css';
import Chat from "./Chat";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ): (
        <h1>login</h1>
      )}
    </div>
  );
}

export default App;
