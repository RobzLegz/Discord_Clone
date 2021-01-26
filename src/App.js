import React from "react";
import Sidebar from "./Sidebar";
import './App.css';
import Chat from "./Chat";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import Login from "./Login";

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
        <Login />
      )}
    </div>
  );
}

export default App;
