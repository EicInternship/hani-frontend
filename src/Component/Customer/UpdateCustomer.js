import React from 'react'
import  { useState } from "react";
import { Link } from "@mui/material";
import axios from "axios";
import LoginIcon from "@mui/icons-material/Login";
import {
  Select,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Grid,
  Avatar,
} from "@mui/material";
import { useLocation } from "react-router";
import { updatecustomer } from '../../Service/Service';

export default function UpdateCustomer() {
    const location = useLocation();
    const { user } = location.state;
    
    const [formData, setFormData] = useState({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      country: user.country,
      userType: user.userType,
    });
    const [message, setMessage] = useState("");
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormData({ ...formData, [name]: value });
    };
  
    const handleUpdation = (event, user) => {
      event.preventDefault();
      handleSubmit(user);
    };
  
    // const handleSubmit = async () => {
    //   try {
    //     console.log(formData);
    //     // const response = await axios.post(`http://localhost:9020/updateuser`, {
    //     //   ...formData,
    //     //   id: user.id,
          
    //     // });
        
    //     setMessage("Updated User Successfully");
    //     setFormData({
    //       firstName: "",
    //       lastName: "",
    //       email: "",
    //       password: "",
    //       userType: "",
    //       country: "",
    //     });
    //   } catch (error) {
    //     console.error(error);
    //     setMessage("Error Updating User");
    //   }
    // };
    const handleSubmit =(event)=>{
        
        updatecustomer(formData,).then((res)=>
            console.log('res.data')
        )
        .catch((error)=>
            console.log(error.data)
        )
    }
  return (
    <div>
        <Box
      sx={{
        width: "400px",
        margin: "auto",
        marginTop: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Update Customer Details</h1>
      <form onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              margin="4"
              required
              fullWidth
              sx={{ my: 0 }}
              marginTop={0}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              sx={{ my: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              sx={{ my: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              margin="normal"
              type="password"
              required
              fullWidth
              sx={{ my: 0 }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              sx={{ my: 0 }}
            />
          </Grid>
          <Grid item xs={12} sx={{ ml: 0 }}>
            <FormControl size="medium" sx={{ width: "100%" }}>
              <InputLabel>User Type</InputLabel>
              <Select
                label="User Type"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
                sx={{ my: 0, height: "100%" }}
                required
              >
                <MenuItem value="Customer">Customer</MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ mr: 2 }}
              onClick={(event) => handleUpdation(event, user)}
              // style={{ backgroundColor: "#9C27B0" }}
            >
              <b>Update Customer</b>
            </Button>

            <Link href="CustomerList" variant="body2">
              <LoginIcon fontSize="large" />
            </Link>
          </Grid>

          {message && <p sx={{ mt: 3 }}>{message}</p>}
        </Grid>
      </form>
    </Box>
    </div>
  )
}
