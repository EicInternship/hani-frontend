import * as React from 'react';
import { useState,useContext } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, Route, Routes , useNavigate} from 'react-router-dom';
import { Button } from '@mui/material';
import {AiFillHome} from 'react-icons/ai';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import {BsFillDatabaseFill} from 'react-icons/bs'
import {BiMessageRoundedError} from 'react-icons/bi';
import Badge, { BadgeProps } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartContext from '../contex/Cart/CartContex';
import DashboardPage from './Desbord.js/DashboardPage';
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProtectedRoute from './ProtectedRoute';
import { UserContext} from '../contex/Usercontext';
const LazyOrder=React.lazy(()=>import('./Order'))
const LazyAddressform=React.lazy(()=>import('./AddressForm'))
const LazyLOGOUT=React.lazy(()=>import('./Logoutuser'))
const Lazydeshbord=React.lazy(()=>import('./Desbord.js/DashboardPage'))
const LasyuserList=React.lazy(()=>import('./Customer/UserList'))
const Lasyupdatecustomer=React.lazy(()=>import('./Customer/UpdateCustomer'))
const Lasyaddcustomer=React.lazy(()=>import('./Customer/AddCustomer'))
const LasydeleteCustomer=React.lazy(()=>import('./Customer/DeleteCustomer'))
const Lasycustomerdetail=React.lazy(()=>import('./Customer/CustomerDetail'))
const LazyProductcard=React.lazy(()=>import('./ProductCard'))
const LazyHome=React.lazy(()=>import('./Home'))
const LazyProduct=React.lazy(()=>import('./Product'))
const LazyAbout=React.lazy(()=>import('./About '))
const LazyCategory=React.lazy(()=>import('./Category'))
const LazySignup=React.lazy(()=>import('./Signup'))
const LazyLogin=React.lazy(()=>import('./Login'))
const LazyCart=React.lazy(()=>import('./Cart/Cart'))
const LazySellerLogin=React.lazy(()=>import('./SellerLogin'))
const LazyLoginforSeller=React.lazy(()=>import('./LoginfoSeller'))
const LasyAllhome =React.lazy(()=>import('./Homepageforall'))
const LazyproductDetails=React.lazy(()=>import('./Productdetils'))

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));
export default function Nevbar() {
  const { isLoggedIn } = useContext(UserContext); 
  const nevigate=useNavigate()
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [listopen, setlistOpen] = useState(true);
  const{totalItems}=useContext(CartContext)
  const role = localStorage.getItem('role');
  
    
  const handleClick = () => {
    setlistOpen(!listopen);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const getdata=(data)=>{
    console.log(data)
  }
  return (
    <Box sx={{ display: 'flex' }} style={{height:"30PX"}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          { isLoggedIn && (
             <IconButton
             color="inherit"
             aria-label="open drawer"
             onClick={handleDrawerOpen}
             edge="start"
             sx={{ mr: 2, ...(open && { display: 'none' }) }}
           >
             <MenuIcon />
           </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">
            E-Commerce
          </Typography>
         
         <div  style={{ marginLeft: "auto" }}>
          
          <Button sx={{marginLeft:'auto'}} variant="contained" onClick={(e)=>{nevigate("/signup")}}>Signup </Button>
     
          <Link to ="/Login">
          <Button sx={{marginLeft:"10px"}} variant="contained">Login</Button>
          </Link> 
          {role === 'Customer' && (
           <IconButton aria-label="cart" sx={{marginLeft:"10px"}} onClick={()=>{nevigate("/cart")}}>
      <StyledBadge badgeContent={totalItems}  color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
          )}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
           <img src='./resorces/20230419_152010_0000 (003).png' style={{height:"60px", width:"120px"}} /> 
          <IconButton onClick={handleDrawerClose} >
         
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
      
        </DrawerHeader>
        <Divider />  
        {role === 'Admin' && (
          <List>
          <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>nevigate("/Desbord")}>
        <ListItemButton >
          <ListItemIcon>
           < DashboardIcon/>
          </ListItemIcon>
          <ListItemText primary="Dashboard " />
        </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <BsFillDatabaseFill/>
        </ListItemIcon>
        <ListItemText primary="Catalog" />
        {listopen? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      </ListItem>
      <Collapse in={listopen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>nevigate("/product")} >
          <ListItemButton sx={{ pl: 4 ,marginLeft:"40px"}}>
        <ListItemText primary=" Add Product" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>nevigate("/category")}>
      <ListItemButton sx={{ pl: 4 ,marginLeft:"40px"}}>
        <ListItemText primary="  Add Category" />
      </ListItemButton>
      </ListItem>
        </List> 
      </Collapse>
      <ListItemButton onClick={()=>nevigate("/userList")}>
        <ListItemIcon>
         <BiMessageRoundedError/>
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItemButton>
        <Divider />
        </List>
        )}
         {role === 'Customer' && (
          <List>
            <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>nevigate("/home")}>
        <ListItemButton >
          <ListItemIcon>
           <AiFillHome/>
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        </ListItem>
        <ListItem  disablePadding sx={{ display: 'block' }}>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <BsFillDatabaseFill/>
          </ListItemIcon>
          <ListItemText primary="Catalog" />
          {listopen? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        </ListItem>
        <Collapse in={listopen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>nevigate("/ProductCard")}>
            <ListItemButton sx={{ pl: 4 ,marginLeft:"40px"}}>
              <ListItemText primary="ProductList" />
            </ListItemButton>
            </ListItem >
          </List>        
        </Collapse>
        <ListItemButton onClick={()=>nevigate("/About")}>
          <ListItemIcon>
           <BiMessageRoundedError/>
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton onClick={()=>nevigate("/logout")}>
          <ListItemIcon>
           <BiMessageRoundedError/>
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
        </List>
         )}
         </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
         <Route   path="/Home" element={<React.Suspense>
          <LazyHome/>
         </React.Suspense>}></Route> 
         <Route path="/signup" element={<React.Suspense>
          <LazySignup/>
        </React.Suspense>}></Route> 
        <Route path="/Login" element={<React.Suspense>
          <LazyLogin/>
        </React.Suspense>}></Route>
          <Route path="/productDetails/:id" element={<ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
                 <LazyproductDetails/>  
              </React.Suspense>
            }
          />}></Route> 
          <Route path="/" element={<React.Suspense>
              <LasyAllhome/>
            </React.Suspense>}></Route>  
        <Route path="/product" element={<ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
                <LazyProduct />
              </React.Suspense>
            }
          />}></Route>
          <Route
        path="/ProductCard"
        element={
          <ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
                <LazyProductcard />
              </React.Suspense>
            }
          />
        }
      />
        <Route path="/Category" element={<ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
                <LazyCategory />
              </React.Suspense>
            }
          />}>
        </Route>
        <Route path="/About" element={<ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />}></Route>
        <Route path="/cart" element={<ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
                <LazyCart />
              </React.Suspense>
            }
          />}></Route>
{/*          
         <Route  path ="/SellerLogin" element={
         <React.Suspense><LazySellerLogin/></React.Suspense>}></Route> */}
         {/* <Route path="/bilingform" element={<Bilingform/>}></Route>
         <Route  path ="/loginforSeller" element={
         <React.Suspense><LazyLoginforSeller/></React.Suspense>}></Route> */}
           <Route path="/userList" element={<ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
                <LasyuserList/>
              </React.Suspense>
            }
          />}> </Route>
           <Route path="/Update" element={<ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
               <Lasyupdatecustomer/>
              </React.Suspense>
            }
          />}> </Route>
           <Route path="/Add" element={<ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
                <Lasyaddcustomer/>
              </React.Suspense>
            }
          />
           }> </Route>
           <Route path="/Delete" element={<ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
               <LasydeleteCustomer/>
              </React.Suspense>
            }
          /> 
           }> </Route>
           <Route path="/Desbord" element={
            <ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
                <Lazydeshbord/>
              </React.Suspense>
            }
          />
           }> </Route>
           <Route path="/CustomerDetail/:id" element={
             <ProtectedRoute
            element={
              <React.Suspense fallback="Loading...">
              <Lasycustomerdetail/>
              </React.Suspense>
            }
          />
           }> </Route>
           <Route path="/logout" element={
            <ProtectedRoute
            element={
              <React.Suspense fallback="Loading..."> 
                <LazyLOGOUT/>
              </React.Suspense>
            }
          />}> </Route>
           <Route path="/address" element={
            <ProtectedRoute
            element={
              <React.Suspense fallback="Loading..."> 
                 <LazyAddressform/>
              </React.Suspense>
            }
          />}> </Route>
           <Route path="/order" element={
            <ProtectedRoute
            element={
              <React.Suspense fallback="Loading..."> 
                <LazyOrder/>
              </React.Suspense>
            }
          />}> </Route>
      
     </Routes>
      </Box>
        
      </Main>
      
    
    </Box>
  );
}