
 import React, { useContext, useState } from 'react'
 import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
 import { FaMinus, FaPlus } from "react-icons/fa";
import CartContext from '../../contex/Cart/CartContex';
 
 function CartItem({cartitem}) {
      const{removeItem,setIncrement,setDecrease}=useContext(CartContext)
    
   return (    
<Grid item xs={12} sm={6} md={4} lg={3} key={cartitem.id}>
            <Box>
            <Card sx={{maxWidth: 345}}  >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={`http://localhost:9020/image/${cartitem.pimagename}`} alt="Card image"
      
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          { cartitem.pname}
          </Typography>
   
   
          <button onClick={() =>setDecrease(cartitem.id)}>
          <FaMinus />
        </button>
        <div className="amount-style">{cartitem.amount}</div>
        <button onClick={() => setIncrement(cartitem.id)}>
          <FaPlus />
        </button>
          <Typography variant="h5">
          Rs.{cartitem.price * cartitem.amount}
          </Typography>
        
          <Button variant='contained'onClick={()=>{removeItem(cartitem.id)}} > Remove
          </Button>
         
        </CardContent>
      </CardActionArea>
    </Card>
            </Box>
            </Grid>
        
    
   )
 }
 export default CartItem
 