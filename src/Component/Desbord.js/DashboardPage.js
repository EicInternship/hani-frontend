import { CardContent, Stack } from '@mui/material'
import React from 'react'
import { useEffect, useState } from "react";
import { getEmail } from '../../Service/Service';
import {
    Card,
    Typography,
  } from "@mui/material";
export default function 
() {
    const [userEmail, setUserEmail] = useState([]);
    useEffect(() => {
      getEmail().then((res) => setUserEmail(res.data));
      }, []);
  return (
    <div>
      <Typography variant="h4"> Welcome to our website as Admin !</Typography>
       <Card>
      <CardContent>
        <Stack
          alignItems="flex-start"
          direction="row"
          justifyContent="space-between"
          spacing={3}
        >
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              Total Customers
            </Typography> 
            </Stack>
            <Typography variant="h4">{userEmail}</Typography>
            </Stack>
            </CardContent>
            </Card>
    </div>
  )
}
