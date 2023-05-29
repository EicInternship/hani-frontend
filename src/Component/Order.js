import React, {useContext, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import CartContext from '../contex/Cart/CartContex';
import { addorder, payment } from '../Service/Service';
import useRazorpay from 'react-razorpay';
export default function Order() {
  const { totalprice, totalItems } = useContext(CartContext);
  const Razorpay = useRazorpay();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let data=JSON.stringify({amount :totalprice,totalitems:totalItems,info:'order_request'})
    const res= await payment(data);
      console.log(res.data);
      console.log(data);
      if(res.data.status ==='created'){
        const options = {
          key: "rzp_test_AI8eqhaiXHtxi2", // Enter the Key ID generated from the Dashboard
          amount: res.data.amount *100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "E-commerce ",
          description: "Payment",
          image: './resorces/20230419_152010_0000 (003).png',
          order_id: res.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: function (res){
              console.log(res.razorpay_payment_id);
              console.log(res.razorpay_order_id);
              console.log(res.razorpay_signature)
              console.log("payment succeful");
          },
          prefill: {
              "name": "",
              "email": "",
              "contact": ""
          },
          notes: {
              "address": "E-commerce Website"
          },
          theme: {
              "color": "#3399cc"
          },
      };

      const  rzp1 = new  Razorpay(options);
rzp1.on('payment.failed', function (res){
        console.log(res.error.code);
        console.log(res.error.description);
        console.log(res.error.source);
        console.log(res.error.step);
        console.log(res.error.reason);
        console.log(res.error.metadata.order_id);
        console.log(res.error.metadata.payment_id);
        alert("Ooop paymnet Failed !")
});
    rzp1.open();
}
    }
   
  

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={5}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc"
          sx={{
            ":hover": {
              boxShadow: '10px 10px 20px #ccc',
            },
          }}
        >
          <Typography variant="h5" padding={3} textAlign="center">
            order details
          </Typography>
          <TextField
            type="number"
            value={totalItems}
            name="totalIteams"
            variant="outlined"
            margin="normal"
          />
          <TextField
            type="number"
            value={totalprice}
            name="totalamount"
            variant="outlined"
            margin="normal"
          />
          <Button variant="contained" type="submit"  sx={{ marginTop: 3, borderRadius: 3 }}>
            Pay
          </Button>
        </Box>
      </form>
    </div>
  );
}

