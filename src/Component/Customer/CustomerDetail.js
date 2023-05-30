import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
import { Typography } from "@mui/material";
import { userDetails } from '../../Service/Service';
import { BsJustify } from 'react-icons/bs';

const containerStyle = {
  padding: "16px",
  margin: "16px auto",
  backgroundColor: "#fff",
  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
  borderRadius: "8px",
  fontWeight: "bold",
  textAlign: "justify"

};

const titleStyle = {
  fontWeight: "bold",
  backgroundColor: "#ffff",
};

const subtitleStyle = {
  marginTop: "8px",
};

export default function
() {
    const [user1, setUser1] = useState({});
    const [user2, setUser2] = useState({});
    const params = useParams();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response1 = await axios.get(
            `http://localhost:9090/order/customerdetail?id=${params.id}`
          );
          setUser1(response1.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [params.id]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response2 = await axios.get(
    //         `http://localhost:8080/payment/customerdetail?id=${params.id}`
    //       );
    //       setUser2(response2.data);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };
    //   fetchData();
    // }, [params.id]);
    useEffect(()=>{
        userDetails(params.id).then((res)=>{
            setUser2(res.data);
        })
    },[params.id])

    const user = { ...user1, ...user2 };

    return (

      <div style={containerStyle}>
        <Typography variant="h5" style={subtitleStyle}>
          <b>Name:</b> {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="h5" style={subtitleStyle}>
          <b>Email:</b> {user.email}
        </Typography>
        <Typography variant="h5" style={subtitleStyle}>
          <b>Registered Date:</b> {user.signupDate}
        </Typography>
        <Typography variant="h5" style={subtitleStyle}>
          <b>Country:</b> {user.country}
        </Typography>
        <Typography variant="h5" style={subtitleStyle}>
          <b>Role :</b> {user.role}
        </Typography>
      </div>
    );
  };
