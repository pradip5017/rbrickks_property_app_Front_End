import React, { useState } from "react";
import { signup } from "../api/authService";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/user-service";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await signup(form);
    alert("Signup successful!");
    navigate("/login");

    signUp(data).then((resp)=>{
      console.log(resp);
      console.log("Success log");
      
      
    }).catch((error)=>{
      console.log(error)
      console.log("Error log");
      
      
    })
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} required /> <br /> <br />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required /> <br /><br />
      <input placeholder="Password" type="password" onChange={(e) => setForm({ ...form, password: e.target.value })} required /> <br /> <br />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
