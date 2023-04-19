import * as React from 'react';
import { useState } from 'react';
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
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Home from './Home';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import {AiFillHome} from 'react-icons/ai';
import Product from './Product';
// import{ Menu} from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {BsFillDatabaseFill} from 'react-icons/bs'
import {BiMessageRoundedError} from 'react-icons/bi'
import ProductCard from './ProductCard';
import Category from './Category';

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

export default function Nevbar() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const[menudata,setmenudata]=useState(" ");
  const [listopen, setlistOpen] = useState(true);

  const handleClick = () => {
    setlistOpen(!listopen);
  };
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }} style={{height:"30PX"}}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            E-Commerce
          </Typography>
         
          <Link to="/signup">
          <Button sx={{marginLeft:'auto'}} variant="contained">Signup </Button>
          </Link>
          <Link to ="/Login">
          <Button sx={{marginLeft:"10px"}} variant="contained">Login</Button>
          </Link>

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
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem  disablePadding sx={{ display: 'block' }} onClick={()=>setmenudata("Home")}>
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
          <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setmenudata("productCard")}>
          <ListItemButton sx={{ pl: 4 ,marginLeft:"40px"}}>
            <ListItemText primary="ProductList" />
          </ListItemButton>
          </ListItem >
          <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setmenudata("Product")} >
          <ListItemButton sx={{ pl: 4 ,marginLeft:"40px"}}>
        <ListItemText primary="Product" />
      </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ display: 'block' }} onClick={()=>setmenudata("Category")}>
      <ListItemButton sx={{ pl: 4 ,marginLeft:"40px"}}>
        <ListItemText primary="Category" />
      </ListItemButton>
      </ListItem>
        </List>
        
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
         <BiMessageRoundedError/>
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItemButton>
        <Divider />
    </List>
   
       
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         {menudata=="Home" && <Home/>}
         {menudata=="Product" && <Product/>} 
         {menudata=="productCard" &&<ProductCard/>}
         {menudata=="Category"&&<Category/>}
       
      </Box>
        
      </Main>
    
    </Box>
  );
}