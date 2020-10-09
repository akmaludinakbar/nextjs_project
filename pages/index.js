import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import { makeStyles,useTheme  } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import cookieCutter from 'cookie-cutter'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import { FormControlLabel,Checkbox,Button,Grid ,Card,CardMedia} from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Router from 'next/router'
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import axios from 'axios';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
    './../assets/svg/XjS2Oo.svg',
  },

  
];

const defaultProps = {
  bgcolor: 'background.paper',
  m: 1,
  border: 1,
  
  style: { width: 'fullWidth', height: '5rem',display:"grid" },
};

const useStyles = makeStyles((theme) => ({
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '67vw',
    color: 'black',
    backgroundColor: 'white'
 },
  image: {
    backgroundRepeat: 'no-repeat',
    // backgroundColor: '#008F4C',
    backgroundSize: 'cover',
    //backgroundPosition: 'center',
    backgroundImage: `url(${"/assets/img/bg.jpeg"})`
  },
  paper: {
    padding: theme.spacing(2),
  
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'bottom'
  },
  root: {
    
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    padding:0,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    margin:0,
    objectFit:'cover',
    
    height: '100vh',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),

  },

  gridstyle:
  {
    display:'grid',
    alignContent:'center'
  },
 
  "@global": {
	
		html: {
			height: "100%"
    },
    body:{
      margin:'0px'
    },
		"#componentWithId": {
			height: "100%"
    },
	}
}));



 

function validateEmail(value) {

  let error;

  if (!value) {
    
    error = 'Required';

  } 
  else if(value!="admin")
  {
    error = 'Username salah';

  }
  // else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {

  //   error = 'Invalid email address';

  // }


  return error;

}
 


function validatePassword(value) {

  let error;


  if(value.length<1)
  {
    error="Password salah"
  }
  else if(value!="admin")
  {
    error="Password salah"
  }

  return error;

}




export default function Index() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
  
<div className={classes.root}>
<AutoPlaySwipeableViews
    //axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
  //  index={activeStep}
    onChangeIndex={handleStepChange}
    enableMouseEvents
  >
    {tutorialSteps.map((step, index) => (
      <div key={step.label}>
        {Math.abs(activeStep - index) <= 2 ? (
          <img className={classes.img} src={step.imgPath} />
        ) : null}
      </div>
    ))}
  </AutoPlaySwipeableViews>
  <div className={classes.overlay}>
  <Grid  justify="space-between" // Add it here :)
   container >
     
     <Grid item >
     <Container component="main" maxWidth="false" 
     style={{margin:'0px',padding:'0px',width:'28vw'}}
    >
     
     <Card style={{boxShadow:'none'}}>
     <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        <Box style={{fontWeight:"fontWeightBold",color:'grey'}}><Typography component="h1" variant="h6"  >
         LOGIN
        </Typography></Box>



        <Formik
         initialValues={{

          password: '',
 
          email: '',
 
        }}
 
         onSubmit={values => {
 
          // same shape as initial values
          console.log(values.email);
         // Login(values.email,value.password);

         console.log("kesini");
         Router.push(`/InputPP`);
         var password=values.password;
         var username=values.email;
         var status;
           var userData;
          //  axios.post('http://localhost:9090/auth/login', {
          //   username: username,
          //   password: password
          // })
          // .then(function (response) {
          //      if(response.status==200)
          //   {
          //     cookieCutter.set('token', response.data.refresh_token);
          //     console.log(response.status);
          //     console.log(response.data.refresh_token);
          //     Router.push(`/InputPP`);
          //   }
        
          // })
          // .catch(function (error) {
          //   console.log(error);
          // });
        
          setOpen(true);
     
           
        
         // Router.push(`/InputPP`);
 
        }}
     
        >

          {({errors, touched, isValidating }) => (
            <Form 
       
            >
              <Field name="email" as={TextField} variant="outlined"
                margin="normal" 
                fullWidth label="email"
               // type="email"
                required
                validate={validateEmail}
                
                >
                  
                

                </Field>
                <ErrorMessage name="email" component="div" />
              <Field name="password" as={TextField} variant="outlined"
                margin="normal"
                fullWidth label="password"
                type="password"
                validate={validatePassword}
                required
                ></Field>
                <ErrorMessage name="password" component="div" />

            <Grid container  justify="space-between" >
            <Grid item>
             <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Simpan User ID"
              />
             </Grid > 
                 <Grid item className={classes.gridstyle} >
                  <Link href="#" variant="body2">
                    Forgot password?
        </Link>
                </Grid>
            </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                style={{backgroundColor:'#519FD7',color:'white'}}
              
              >

                LOGIN
    </Button>
    <Typography align='center'
    paragraph="true" variant="subtitle2" style={{paddingTop:'10px'}}>Atau</Typography>
      <Button
                
                fullWidth
                variant="contained"
                style={{backgroundColor:'#FFB94B',color:'white'}}
                href="/SignUp"
              >

                DAFTAR
    </Button>
    {/* <Typography align='right'
    paragraph="true" variant="caption" color="textSecondary">Copyright A</Typography> */}
    <Typography variant="caption"   paragraph="true" color="textSecondary">Lakukan pendaftaran jika belum memiliki akun</Typography>
    <Typography variant="caption" paragraph="true" color="textSecondary">Kata sandi akan terkunci secara otomatis apabila telah melakukan kesalahan (5) kali</Typography>
   
    <Box borderColor="error.main" {...defaultProps}>
      <Typography color="error" align='center' variant="h5">HATI-HATI!</Typography>
      <Typography color="textSecondary" variant="caption" align="center">Jangan pernah bagikan password kamu kepada siapapun ya!</Typography>
      </Box>
            </Form>)
          }

        </Formik>

      </div>
     </Card>

    </Container>
     </Grid>
    
   </Grid>
  </div>
</div>
   
     
   
   
      
  );
}
