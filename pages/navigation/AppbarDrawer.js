import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsActiveOutlinedIcon from '@material-ui/icons/NotificationsActiveOutlined';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import cookieCutter from 'cookie-cutter'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import {Typography,makeStyles,Badge,Drawer,Divider,Box,Grid,Avatar,Icon} from '@material-ui/core';
import { useRouter } from 'next/router';
import ListSubheader from '@material-ui/core/ListSubheader';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import ViewListIcon from '@material-ui/icons/ViewList';
import BarChartIcon from '@material-ui/icons/BarChart';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import HelpIcon from '@material-ui/icons/Help';
import Router from 'next/router'
import Link from '@material-ui/core/Link';
import axios from 'axios';


const secondaryListItems = (
  <div>
    <ListSubheader inset>Extension</ListSubheader>
  <Link   href="/extensionpage/PanduanPengguna">
  <ListItem button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Panduan " />
    </ListItem></Link>
   <Link  href="/extensionpage/FAQ"> <ListItem button>
      <ListItemIcon>
        <LiveHelpIcon />
      </ListItemIcon>
      <ListItemText primary="FAQ" />
    </ListItem></Link>
   <Link  href="/extensionpage/ContactCenter">
   <ListItem button>
      <ListItemIcon>
        <LiveHelpIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Center" />
    </ListItem></Link>
    
  </div>
);

const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
  imageIcon: {
    height: '100%'
},
iconRoot: {
    textAlign: 'center'
},
imageIcon2: {
  height: '100%',
  width:'90%',
  marginRight:'10px'
  
},
iconRoot2: {
  width:'180px',
  fontSize:'54px',
  textAlign: 'center',
  marginRight:'20px',

},
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      menuButton: {
        marginRight: 36,
      },
      menuButtonHidden: {
        display: 'none',
      },
      title: {
        flexGrow: 1,
        color:'black'
      },
      drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      },
      appBarSpacer: theme.mixins.toolbar,
      content: {
        backgroundColor:
          theme.palette.type === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
        height: '85vh',
        justifyContent: 'center',
        display: 'flex'
      },
      paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
    
        flexDirection: 'column',
      },
      fixedHeight: {
        height: 240,
      },
}));
 function logout() {
  var token= cookieCutter.get('token');
  axios.post('http://localhost:9090/auth/logout', {
  refresh_token:  token
     
    })
    .then(function (response) {
      console.log("responselogout");
      console.log(response);

         if(response.status==204)
      {
        cookieCutter.set('token', '', { expires: new Date(0) });
        console.log(cookieCutter.get('token'));
  
        Router.push(`/`);
      }
  
    })
    .catch(function (error) {
      console.log(error);
    });
   
}
export default function AppbarDrawer({children,href}) {
    const [open, setOpen] = React.useState(false);
    const router = useRouter()
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openmenu = Boolean(anchorEl);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const openmenu2 = Boolean(anchorEl2);

    const handleMenu2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
  
    const handleClose2 = () => {
      setAnchorEl2(null);
    };
  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


    const navigate = ()=>
    {
      logout();
      
     // Router.push(`/`);
    };
    const navigatePengguna=()=>
    {
      Router.push(`/extensionpage/PanduanPengguna`);
    };
    const navigateFAQ=()=>
    {
      Router.push(`/extensionpage/FAQ`);
    };
    const handleprofile =()=>
    {
      Router.push(`/profilepemberikerja`);
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return  router.pathname=='/'?<div></div>:<div>
        <AppBar style={{backgroundColor:'white',boxShadow:'0px 0px 20px 0px rgba(0,0,0,0.2)'}} position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
            <IconButton
            
                edge="start"
                style={{color:'grey'}}
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
                <MenuIcon />
            </IconButton>
            {/* <Link as={`/`} href="/Profile">
        <IconButton>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </IconButton>
      </Link> */}
     <Icon classes={{ root: classes.iconRoot2 }}><img className={classes.imageIcon2} src="./../assets/img/Asset7.png" /></Icon>
      
            <Typography
            
                variant="h6"
            align="center"
                noWrap
                className={classes.title}
            >
                {/* {router.pathname} */}
                <Grid container direction="row"
                   justify="flex-start"
                   alignItems="center"
                   spacing={2}>
                
                  <Grid item>  <Box style={{backgroundColor:"#ffb548",width:"4vw",height:'9vh'}}></Box></Grid>
                  </Grid>
               
              
      </Typography>
          
      <Link style={{color:'grey',paddingRight:'10px'}}>Bantuan & Informasi</Link>
      <Link style={{color:'grey'}}>Data Kepesertaan</Link>
      <IconButton color="inherit" style={{color:'grey'}}
            onClick={handleMenu2} >
                <Badge badgeContent={6} color="secondary">
                    <NotificationsActiveOutlinedIcon />
                   
                </Badge>

            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl2}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openmenu2}
                onClose={handleClose2}
              >
                <MenuItem >Ilham mengirim anda sebuah  pesan</MenuItem>
                <MenuItem >Anda mendapatkan satu notif</MenuItem>
                <MenuItem >Data telah disetujui !!</MenuItem>
                <MenuItem onClick={navigateFAQ}>FAQ telah diupdate</MenuItem>
                <MenuItem onClick={navigatePengguna}>Panduan Pengguna</MenuItem>
              </Menu>
            <IconButton color="inherit" style={{color:'grey'}}
            onClick={handleMenu} >

                <PersonOutlineOutlinedIcon />



            </IconButton>
             <IconButton color="inherit" style={{color:'grey'}}
             >

<Icon classes={{ root: classes.iconRoot }}><img className={classes.imageIcon} src="./../assets/svg/Search.svg" /></Icon>
                        



            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openmenu}
                onClose={handleClose}
              >
                <MenuItem onClick={handleprofile}>Profile</MenuItem>
                <MenuItem onClick={navigate}>Log Out</MenuItem>
              </Menu>

        </Toolbar>
    </AppBar>
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
             
               
                <Grid container direction="column"  justify="center"
  alignItems="center" style={{paddingTop:'20px'}} spacing={1}>
                  <Grid item>   <Avatar style={{opacity:'1'}} aria-label="recipe" >
                        R
          </Avatar></Grid>
          <Grid item>  <Typography> admin</Typography></Grid>
                </Grid>
               
            </div>
            
            <List>
           <Link href="/InputPP">
           <ListItem button >
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem></Link>
               <Link href="/tablelistpeserta">
               <ListItem button  >
                    <ListItemIcon>
                        <ViewListIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile Pemberi Kerja" />
                </ListItem>
</Link>
            </List>
            <Divider />
            <List>{secondaryListItems}</List>
        </Drawer>
        {children}</div>
        
}
