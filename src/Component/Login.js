import React, { useContext, useEffect, useState } from 'react'
import {  loginUSER } from '../Service/Service'
import { Link, json } from 'react-router-dom'
import { Box, TextField, Typography,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { UserContext } from '../contex/Usercontext'

export default function Login() {
  const { handleLogin,isLoggedIn} = useContext(UserContext);
  const nevigate = useNavigate();
    const[loginDetails,setlogingdetails]=useState({
      email:"",
      password:""
    })

   const  handleChange=(e,property)=>{
        setlogingdetails({...loginDetails,[property]:e.target.value})
   }
 
   const handleSubmit=(e)=>{
    e.preventDefault();
    loginUSER(loginDetails).then((res)=>{
    localStorage.setItem('jwt', res.data);
      const token = localStorage.getItem('jwt');
      const decodedToken = jwtDecode(token);
      handleLogin();
      if (token) {        
        console.log(decodedToken.authorities)
        localStorage.setItem('role', decodedToken.authorities)
      }
      if(decodedToken.authorities==="Admin"){
          nevigate("/Desbord")
          document.getElementById("p").innerHTML = "you are loggded in as admin";
        }
        else if (decodedToken.authorities==="Customer"){
          nevigate("/Home")
          document.getElementById("p").innerHTML = "you are loggded in as customer";
        } 
     }).catch((error) => {
      if (error.response.status === 404) { 
        document.getElementById("p").innerHTML = "User not found please sign in";
      } else {
        document.getElementById("p").innerHTML = "An error occurred. Please try again.";
      }
     } ) 
    } 
    useEffect(() => {
      console.log('isLoggedIn:', isLoggedIn);
    }, [isLoggedIn]);
  return (
    <div>
      
        <form onSubmit={(e)=>handleSubmit(e)}>
          <Box display="flex"
           flexDirection={"column"}
            maxWidth={400}
             alignItems="center"
              justifyContent={"center"}
              margin="auto"
              marginTop={5}
              padding={5}
              borderRadius={5}
              boxShadow={'5px 5px 10px #ccc'}
              sx={{
                 ":hover":{
                  boxShadow:'10px,10px,20px,#ccc'
                 }
              }}
              >
            <Typography  variant="h5" padding={3} textalign="center">Login</Typography>
           
            <TextField 
            type={"email"}
             variant='outlined'
              value={loginDetails.email} 
              placeholder='Enter email'
              margin="normal"
              onChange={(e)=>{handleChange(e,'email')}} />
            <TextField type={"password"}
            value={loginDetails.password} 
            variant='outlined'
            placeholder='Password'
            margin="normal"
            onChange={(e)=>{handleChange(e,'password')}} />
             <Button variant='contained' type="submit"
              sx={{marginTop:3,borderRadius:3}}>Login</Button>
             Are you not a member?<Link to ="/signup">signup</Link>
            <p id="p"></p>
            </Box>
        </form>
    </div>
  )
}
