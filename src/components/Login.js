import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate, BrowserRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button, TextField } from "@material-ui/core";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3333/api/user/login", {
      email: email,
      password: password,
    });
  };

  function handleSubmit(e) {
    const { email, password } = useState;
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          label="Email"
          variant="filled"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          label="Password"
          variant="filled"
        />
      </Form>
    </div>
  );
}
