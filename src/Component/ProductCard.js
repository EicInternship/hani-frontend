import React, { useContext, useEffect, useState } from 'react'    
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Box, Button, Pagination } from '@mui/material';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import {Link, json} from 'react-router-dom';
import { getproductbypagination } from '../Service/Service';

const useStyles = makeStyles({
  card: {
    transition: 'transform .2s',
    '&:hover': {
      transform: 'scale(1.05)'
    }
    },    
  });
function ProductCard() {
    const [Product, setproduct] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    // useEffect(() => {
    //     getproduct().then((res) => {
    //         setproduct(res.data)
    //         console.log(res.data)
    //     })
    // },[])
    useEffect(() => {
      getAllProduct(currentPage-1);
    }, [currentPage]);
  
    const getAllProduct=async (page)=>{
      try {
        const res = await getproductbypagination(page);
        // console.log(res.data.split("]")[0].replace(/'/g, '"')+"]");
      
        // const pageNo = res.data.split("]")[1]
        
        // const products = JSON.parse(res.data.split("]")[0].replace(/'/g, '"') +"]")
        // console.log(product);
        // console.log("second value",res.data.split("]")[1])
        setproduct(res.data.content);
        setTotalPages(res.data.totalpages);
         
      } catch (error) {
        console.error('Error fetching products:', error);
      }
      
    }; 
    console.log(Product)
    const handlePageChange = (event, newpage) => {
      setCurrentPage(newpage);
    };
  const classes = useStyles();

    return (
        <div> 
            
            <Grid container spacing={5}>
    {  Product.map((f) =>
    
    <Grid item xs={12} sm={6} md={4} lg={3} key={f.id}>
        
            <Box>
              <Link to={`/productDetails/${f.id}`}>
            <Card sx={{ maxWidth: 345 }} className={classes.card} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={`http://localhost:9020/image/${f.pimagename}`} alt="Card image"
      
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
        
          <Button variant='contained'   > Add to Cart
          </Button>
         
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
            </Box>
            </Grid>

    )}
    <br></br>
    <br></br>
      <Pagination  count={totalPages}
        page={currentPage}
        onChange={handlePageChange}/>
    </Grid>

   {/* {cartItems ? <Addtocartpage cartItems={cartItems}/> :""}   */}
        </div>
    )
}
export default ProductCard
