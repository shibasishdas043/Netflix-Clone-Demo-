import React from "react";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  const navigate = useNavigate();

  //check authenticated or not`
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Logged In");
        navigate("/");
        toast.success("Logged In !")
      } else {
        navigate("/login");
      }
    });
  }, []);
  //check authenticated or not

  return (
    <div>
      {/* <ToastContainer theme="colored"/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
