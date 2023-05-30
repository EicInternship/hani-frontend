import React from 'react'
import Carousel from 'react-elastic-carousel';
import { getproduct } from '../Service/Service';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';

function Home() {
  const [Product, setproduct] = useState(null)
//   const [token,setToken]=useState(null)
// useEffect(()=>{
//   setToken(`Bearer ${localStorage.getItem('jwt')}`)
// })
 
  useEffect(() => {
    getproduct().then((res) => {
      console.log(res.data);
      setproduct(res.data)
    }).catch(()=>{
      // alert("errror occured")
    })
  },[]);
  console.log("component loaded")
  return (
    <>
      <div>
        {/* <Typography>this is home commpent</Typography> */}
        {Product ?  <Carousel >
          <Card className='card-first' >welcom to e Commerce</Card>
          {Product.map((f) =>
            <Card className='card'>
              <CardActionArea>
                <CardMedia
                  component="img"

                  image={`http://localhost:9020/image/${f.pimagename}`} alt="Card image"

                />
              </CardActionArea>
            </Card>
          )}
        </Carousel>

:""}
             </div>
    </>
  )
}
export default Home
