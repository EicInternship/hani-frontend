// import { useContext } from "react";
// import CartContext from "../../contex/Cart/CartContex";
// import "./Cart.css";
// import CartItem from "./CartItem";
// import { Grid } from "@mui/material";
// const Cart = () => {
//   const { showCart, cartItems, showHideCart } = useContext(CartContext);
// //   let opts = { format: "%s%v", symbol: "€" };

//   return (
//     <>
//       {showCart && (
//         <div >
//           <div style={{ textAlign: "right" }}>
//             <i
//             //   style={{ cursor: "pointer" }}
//             //   className='fa fa-times-circle'
//             //   aria-hidden='true'
//               onClick={showHideCart}
//             ></i>
//           </div>
       
//             {cartItems.length === 0 ? (
//               <h4>Cart is Empty</h4>
//             ) : (
//             //   <ul>
//             //     {cartItems.map((item) => (
//             //       <CartItem key={item._id} item={item} />
//             //     ))}
//             //   </ul>
//                <Grid container spacing={5}>
//                  {
//                     cartItems.map((item) => (
//                         <Grid item xs={12} sm={6} md={4} lg={3}> 
//                   <CartItem key={item._id} item={item} />
//                   </Grid>
//                 ) )}
//                </Grid>
              
//             )}
// {/*          
//           <div className='Cart__cartTotal'> */}
//             <div>Cart Total</div>
//             <div style={{ marginLeft: 5 }}>
//               {(
//                 cartItems.reduce((amount, item) => item.price + amount, 0)
            
//               )}
//             </div>
//           {/* </div> */}
//      </div>
//       )}
//     </>
//   );
// };

// export default Cart;
import {  Grid ,Button} from '@mui/material'
import React, { useContext } from 'react'
import CartContext from '../../contex/Cart/CartContex'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import "./Cart.css";
 function Cart() {
const{cart,clearCart,totalprice, shipping_fee } =useContext(CartContext)
 
if (cart.length === 0) {
    return (
      <div className='emptycart'>
           <h3>No Cart in Item </h3>
      </div>
    );
  }
  return (
    <div>
            <Grid container spacing={5}>      
    {  cart.map((cartitem) =>{
          return <CartItem key={cartitem.id} cartitem={cartitem}/>

 })}
 
    </Grid>
    <div className="cart-two-button">
          <Link to="/productcard">
            <Button variant='contained'> continue Shopping </Button>
          </Link>
          <Button  variant='contained' onClick={clearCart}>
            clear cart
          </Button>
        </div>
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>subtotal:</p>
              <p>
                 Rs.{totalprice}
              </p>
            </div>
            <div>
              <p>shipping fee:</p>
              <p>
                 Rs.{shipping_fee} 
              </p>
            </div>
            <hr />
            <div>
              <p>order total:</p>
              <p>
                Rs.{shipping_fee + totalprice}
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
export default Cart