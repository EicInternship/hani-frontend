import React, { useEffect, useState } from 'react'    
import { getproduct } from '../Service/Service'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Nevbar from './Nevbar';
import { styled, useTheme } from '@mui/material/styles';
import {Link} from 'react-router-dom';
import Productdetils from './Productdetils';
const useStyles = makeStyles({
  card: {
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.05)'
    }
    },
  });
  
  

function ProductCard() {
    const [Product, setproduct] = useState([])
    const[selectedproduct,setselectedproduct]=useState("")
  
    // const imageurl = `http://localhost:8080/${product}`
  
    useEffect(() => {
        getproduct().then((res) => {
            setproduct(res.data)
        })
    },[])
   
    // console.log(product);

  const classes = useStyles();

    return (

        <div>
          
            {/* <div className="row">

                {Product.map((f) =>
                    <div className="col-md-6">
                        <div className="card list"  >
                            <img class="card-img-top img-thumbnail" src={`http://localhost:8080/${f.pimagename}`} alt="Card image" />
                            <div class="card-body">
                                <h4 class="card-title">{f.pname}</h4>
                                <p class="card-text">{f.description}</p>
                                <h4>Rs.{f.price}</h4>
                                {/* <button onClick={()=>addtocart(f)}><a href="#" class="btn btn-primary">Add to cart</a></button> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                {/* )
                }
            </div> */} 
             {/* <Box sx={{ display: 'flex'}} > */}
              {/* <Nevbar/> */}
          
             {/* <Box  component="main" sx={{ flexGrow: 1,p:3}}>  */}
            <Grid container spacing={5}>
         
    {  Product.map((f) =>
    
    <Grid item xs={12} sm={6} md={4} lg={3} key={f.id}>
            <Box>
              <Link to={`/productDetails/${f.id}`}>
            <Card sx={{ maxWidth: 345 }} className={classes.card} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={`http://localhost:8080/${f.pimagename}`} alt="Card image"
      
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {f.pname}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          {f.description}
          </Typography> */}
          <Typography variant="h5">
          Rs.{f.price}
          </Typography>
          <Button variant='contained'> Add to Cart</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
            </Box>
            </Grid>

    )}
  
    </Grid>
        </div>
    )
}
export default ProductCard
