import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Dashboard from './Dashboard'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import ReceiptIcon from '@material-ui/icons/Receipt';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import { FormControlLabel, Checkbox, Box, Button, Card, CardContent, Avatar, Typography, CardActions, Divider } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Icon from '@material-ui/core/Icon';
import { autoPlay } from 'react-swipeable-views-utils';
import Router from 'next/router'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            './../assets/img/Tapera-Banner-Design-1-10-Oct-2020.jpg',
    },
    {
        label: 'Bird',
        imgPath:
            './../assets/img/Tapera-Banner-Design-3-10-Oct-2020.jpg',
    },

];
const useStyles = makeStyles((theme) => ({
    sizepercent:{
        height:'11vh',
        
    },
    imageIcon3: {
        height: '100%',
        width: '40px'
    },
    iconRoot3: {

        textAlign: 'center'
    },
    imageIcon: {
        height: '70px',
        position: 'relative',
        zIndex: 10,
        display: 'block',
        top: -40,
        marginBottom: '-50vh',
    },
    iconRoot: {
        textAlign: 'center'
    },
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),

        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    gridheight:
    {
        height: '250px'
    },
    gridmini:
    {
        // paddingTop:theme.spacing(5),
        margin: '15px',
        height: '10vw',
        boxShadow: 'none'
    },
    gridheightbggrey:
    {
        height: '25vh',
        backgroundColor: '#d0c9c9'
    },
    footerheight:
    {
        height: '19vh',

    },
    gridheightbgminigrey:
    {
        width: '10vw',
        height: '15vh',
        boxShadow: 'none',




    },

    hover: {
        color: 'black',
        // borderBottom: '3px solid #a8b092',
        margin: "5px",
        '&:hover': {
            backgroundColor: 'white',
            marginLeft: '2px',
            color: 'red',
            //  borderBottom: '3px solid red',


        },
    },
    imagebg:
    {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '24vh',
        backgroundImage: `url(${"/assets/img/bg.jpeg"})`,
    },
    img: {
        padding: 0,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: 0,
        height: '250px',
        display: 'block',
        overflow: 'hidden',
        width: '100%',
    },
    overlay: {
        color: 'black',
        backgroundColor: 'transparent'

    },
    avatar:
    {
        width: '70px',
        backgroundColor: 'orange',
        height: '70px'
    },
    cardstyle:
    {
        boxShadow: "none",
        position: 'relative'

    },
    bggrey:
    {
        backgroundColor: 'grey'
    }
}));
const handleStepChange = (step) => {
    setActiveStep(step);
};
export default function InputPP() {
    const classes = useStyles();
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
    const handleMenu = () => {
        Router.push(`/tablelistpeserta`);
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={0}
                direction="column"
                justify="flex-start"
                alignItems="stretch">

                <Grid item xs={12} container>

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
                    <Grid item xs={12} container justify="center"
                        alignItems="center"> <div className={classes.overlay}>

                            <Icon classes={{ root: classes.iconRoot }}><img className={classes.imageIcon} src="./../assets/svg/LogoTaperaOrange01.svg" /></Icon>
                            {/* <Avatar aria-label="recipe" className={classes.avatar}>
                            R
          </Avatar> */}
                        </div></Grid>
                </Grid>

                <Grid item xs={12}  >
                    <Paper className={classes.gridheight}>
                        <Grid container
                            style={{ paddingTop: '75px' }}
                            direction="row"
                            justify="center"
                            alignItems="center">

                            <Grid item >
                                <Paper className={classes.gridheightbgminigrey} onClick={handleMenu} onTouchMove>
                                    <Grid container direction="column"
                                        justify="center"
                                        alignItems="center"
                                        className={classes.hover}>
                                        <Grid item>    <Icon classes={{ root: classes.iconRoot3 }}><img className={classes.imageIcon3} src="./../assets/svg/Asset2.svg" /></Icon></Grid>
                                        <Grid item ><Typography align='center' >Pengelolaan Peserta</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                            <Grid item> <Paper style={{widht:'50px',height:'100px',marginLeft:'20px',}}> <Divider orientation="vertical" flexItem /></Paper></Grid>
                      

                            <Grid item >
                                <Paper className={classes.gridheightbgminigrey}>
                                    <Grid container direction="column"
                                        justify="center"
                                        alignItems="center"
                                        className={classes.hover}>
                                        <Grid item><Icon classes={{ root: classes.iconRoot3 }}><img className={classes.imageIcon3} src="./../assets/svg/Asset6.svg" /></Icon></Grid>
                                        <Grid item><Typography align='center' >Billing Info  </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                                
                                    <Grid item> <Paper style={{widht:'50px',height:'100px',marginRight:'20px'}}> <Divider orientation="vertical" flexItem /></Paper></Grid>
                            <Grid item>
                         
                                <Paper className={classes.gridheightbgminigrey}>
                                     
                                    <Grid container direction="column"
                                        justify="center"
                                        alignItems="center"
                                        className={classes.hover}>
                                        <Grid item><Icon classes={{ root: classes.iconRoot3 }}><img className={classes.imageIcon3} src="./../assets/svg/Asset4.svg" /></Icon></Grid>
                                        <Grid item><Typography align='center' >Pengajuan Claim  </Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={12}  >
                    <Paper className={classes.gridheightbggrey}>
                        <Grid container

                            direction="row"
                            justify="center"
                            alignItems="center">
                            <Grid item xs={3} >

                                <Paper style={{ marginLeft: '10px', marginTop: '5px', marginBottom: '5px' }}>
                                    <Grid container direction='column' justify="space-between"
                                        alignItems="stretch">
                                        <Grid item container direction="column" justify="space-between"
                                            style={{ height: '7vh', backgroundColor: '#4CB648', color: 'white' }}>
                                            <Grid item style={{ margin: '10px' }}>
                                                <Typography gutterBottom variant="subtitle"> TOTAL PESERTA
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="column" justify="space-between"
                                            style={{ height: '7vh', backgroundColor: '#4CB648', color: 'white' }}>
                                            <Grid item> <Typography variant='h6' align='center'
                                                style={{ marginBottom: '20px' }}>4.213.456</Typography></Grid>
                                        </Grid>
                                        <Grid item container direction="row" style={{ backgroundColor: '#1C7516', color: 'white' }} justify="flex-end"
                                            alignItems="flex-end">
                                            <Typography gutterBottom variant="subtitle2" style={{ paddingBottom: '3px' }}>  Lihat Detail
        </Typography>  <ArrowRightIcon fontSize="large" />

                                        </Grid>
                                    </Grid>
                                </Paper>

                            </Grid>
                            <Grid item xs={3} >

                                <Paper style={{ marginLeft: '10px', marginTop: '5px', marginBottom: '5px' }}>
                                    <Grid container direction='column' justify="space-between"
                                        alignItems="stretch">
                                     <Grid item container direction="column" justify="space-between"
                                              style={{height: '7vh', backgroundColor: '#3AA2EF', color: 'white'}}>
                                            <Grid item style={{margin: '10px'}}>
                                                <Typography gutterBottom variant="subtitle"> PENSIUN BULAN INI
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="column" justify="space-between"
                                              style={{height: '7vh', backgroundColor: '#3AA2EF', color: 'white'}}>
                                            <Grid item> <Typography variant='h6' align='center'
                                                                    style={{marginBottom: '20px'}}>4.213.456</Typography></Grid>
                                        </Grid>
                                        <Grid item container direction="row" style={{ backgroundColor: '#0D5D8E', color: 'white' }} justify="flex-end"
                                            alignItems="flex-end">
                                            <Typography gutterBottom variant="subtittle" style={{ paddingBottom: '3px' }}>  Lihat Detail
</Typography>  <ArrowRightIcon fontSize="large" />

                                        </Grid>
                                    </Grid>
                                </Paper>

                            </Grid>
                            <Grid item xs={3} >

                                <Paper style={{ marginLeft: '10px', marginTop: '5px', marginBottom: '5px' }}>
                                    <Grid container direction='column' justify="space-between"
                                        alignItems="stretch">
                                       <Grid item container direction="column" justify="space-between"
                                              style={{height: '7vh', backgroundColor: '#FFB548', color: 'white'}}>
                                            <Grid item style={{margin: '10px'}}>
                                                <Typography gutterBottom variant="subtitle"> TOTAL TABUNGAN
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item container direction="column" justify="space-between"
                                              style={{height: '7vh', backgroundColor: '#FFB548', color: 'white'}}>
                                            <Grid item> <Typography variant='h6' align='center'
                                                                    style={{marginBottom: '20px'}}>4.213.456</Typography></Grid>
                                        </Grid>
                                        <Grid item container direction="row" style={{ backgroundColor: '#A86B1A ', color: 'white' }} justify="flex-end"
                                            alignItems="flex-end">
                                            <Typography gutterBottom variant="subtittle" style={{ paddingBottom: '3px' }}>  Lihat Detail
</Typography>  <ArrowRightIcon fontSize="large" />

                                        </Grid>
                                    </Grid>
                                </Paper>

                            </Grid>
                            <Grid item xs={3} >
                                <Paper className={classes.gridmini} style={{ backgroundColor: "transparent" }}>
                                    <Grid container
                                        direction="column"
                                        justify="center"
                                        alignItems="start"
                                        style={{paddingTop:'5px'}}
                                        >
                                        <Grid Item>
                                            <Typography variant="subtittle1">STATUS KEPESERTAAN</Typography>
                                        </Grid>
                                        <Grid container >
                                            <Grid item xs={2} >
                                                <Paper className={classes.sizepercent} style={{ boxShadow: 'none', borderRadius: 'unset', textAlign: 'center', backgroundColor: '#FFB548' }}>10%</Paper>
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Paper  className={classes.sizepercent}  style={{ boxShadow: 'none', borderRadius: 'unset', textAlign: 'center', backgroundColor: '#4CB648' }}>Aktif</Paper>
                                            </Grid>
                                        </Grid>
                                        {/* <Grid Item style={{ paddingTop: '20px' }}>
                                            <Typography variant="subtittle1">PENSIUN / MENINGGAL</Typography>
                                        </Grid>
                                        <Grid container>
                                            <Grid item xs={3} >
                                                <Paper style={{ boxShadow: 'none', borderRadius: 'none', textAlign: 'center', backgroundColor: '#FFB548' }}>30%</Paper>
                                            </Grid>
                                            <Grid item xs={9}>
                                                <Paper style={{ boxShadow: 'none', borderRadius: 'none', textAlign: 'center', backgroundColor: '#4CB648' }}>Aktif</Paper>
                                            </Grid> */}
                                        {/* </Grid> */}
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} >
                    <Paper className={classes.footerheight}>  <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center">

                        <Grid item >
                            <Grid container
                                style={{ margin: '10px' }}
                                spacing={0}
                                direction="column"
                                justify="space-between"
                                alignItems="start">
                                <Grid item>
                                    <div>        <Typography variant="subtitle2">   <Box fontSize={13} fontWeight="fontWeightBold">   Badan Pengelola Tabungan Perumahan Rakyat (BP TAPERA)</Box></Typography>
                                        <Typography variant="caption">   <Box fontSize={10} color="gray" fontWeight="fontWeightBold">didirikan berdasarkan Undang Undang Nomor 4 Tahun 2016</Box></Typography>
                                        <Typography variant="caption">   <Box fontSize={10} color="gray" fontWeight="fontWeightBold">tentang Tabungan Perumahan Rakyat</Box></Typography>

                                    </div>
                                </Grid>
                                <Grid item>

                                    <div>  <Typography variant="caption">   <Box fontSize={10} color="gray" fontWeight="fontWeightBold">BP Tapera Wisma Iskandarsyah Blok B2, B3 dan C4 jln. Iskandarsyah Raya</Box></Typography>
                                        <Typography variant="caption">   <Box fontSize={10} color="gray" fontWeight="fontWeightBold">Kav 12-14 Kebayoran Baru Jakarta Selatan 12160</Box></Typography>
                                    </div>

                                </Grid>
                                <Grid item >
                                    <Typography variant="caption">   <Box fontSize={10} color="gray" fontWeight="fontWeightBold">Copyright @ Tapera 2020</Box></Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container
                                spacing={2}
                                direction="row">
                                <Grid item>
                                    <Grid container
                                        direction="column"
                                        alignItems="start">
                                        <Grid item>
                                            Informasi & Bantuan
                                         </Grid>
                                        <Grid item>
                                            FAQ
                                         </Grid>
                                        <Grid item>
                                            Kebijakan & Privasi
                                         </Grid>
                                        <Grid item>
                                            Syarat & Ketentuan
                                         </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item >
                                    <Divider orientation="vertical" color="red" />
                                </Grid>
                                <Grid item> <Grid container style={{ paddingRight: '15px' }}>

                                    <Grid item>
                                        Ikuti Kami</Grid></Grid></Grid>
                            </Grid>
                        </Grid>
                    </Grid></Paper>
                </Grid>

            </Grid>
        </div>
    );
}



InputPP.Layout = Dashboard;