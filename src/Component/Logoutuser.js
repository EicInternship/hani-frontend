import { Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contex/Usercontext';

export default function Logoutuser() {
  const {handleLogout}= useContext(UserContext);
   const nevigate=useNavigate()
    const handelsubmit=()=>{
        localStorage.removeItem('jwt');
        localStorage.removeItem('role');
        handleLogout()
        nevigate("/")
       }
  return (
    <div>
         <Typography variant="h5" padding={3} textalign="center">Thank you for visiting</Typography>
        <Button variant='contained' type="submit"
          onClick={handelsubmit}>Logout</Button>
    </div>
  )
}
