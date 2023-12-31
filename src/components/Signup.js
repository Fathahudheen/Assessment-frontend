import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate()
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name,"value",e.target.value);
  };
  const sendRequest = async () => {
    const res = await axios.post('http://localhost:5000/api/signup',{
      name:inputs.name,
      email:inputs.email,
      password:inputs.password
    }).catch(err => console.log(err));
    const data = await res.data
    return data;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    sendRequest().then(() => history('/login'))
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box width={300} margin="auto" display="flex" flexDirection={"column"}>
          <Typography variant="h2">Signup</Typography>
          <TextField
            name="name"
            onChange={handleChange}
            value={inputs.name}
            placeholder="Name"
            margin="normal"
          />
          <TextField
            name="email"
            onChange={handleChange}
            type={"email"}
            value={inputs.email}
            placeholder="Email"
            margin="normal"
          />
          <TextField
            name="password"
            onChange={handleChange}
            type={"password"}
            value={inputs.password}
            placeholder="Password"
            margin="normal"
          />
          <Button variant="contained" type="submit">
            Signup
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Signup;
