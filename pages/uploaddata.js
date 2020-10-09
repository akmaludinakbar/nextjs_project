import React , { Component, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Dashboard from './Dashboard'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import DescriptionIcon from '@material-ui/icons/Description';
import PeopleIcon from '@material-ui/icons/People';
import ReceiptIcon from '@material-ui/icons/Receipt';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import { FormControlLabel, Checkbox, Box, Button, Card, CardContent, Avatar, Typography, CardActions, Divider, Breadcrumbs, Link } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Icon from '@material-ui/core/Icon';
import { autoPlay } from 'react-swipeable-views-utils';
import Router from 'next/router'

const useStyles = makeStyles((theme) => ({

}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function uploaddata() {
    const inputEl = React.useRef(null);
 const onButtonClick = () => {
    console.log("inside")
    // `current` points to the mounted file input element
    inputEl.current.click();
  };

    return (
        <Grid container direction="column" spacing={1} style={{ paddingTop: '2px' }} >
            <Grid item >
                <Paper style={{ height: '15vh', boxShadow: 'none' }}>
                    <div style={{ paddingLeft: '30px', paddingTop: "35px" }}>   <Typography variant="h6" align="bottom"> Unggah File Data IFUA</Typography>
                        <Breadcrumbs aria-label="breadcrumb" style={{ paddingTop: '10px' }}>
                            <Link color="inherit" href="/listtableuser" onClick={handleClick}>
                                listtableuser
  </Link>

                            <Typography color="textPrimary">upload Data</Typography>
                        </Breadcrumbs>
                    </div>
                </Paper>
            </Grid>
            <Grid item container alignContent="flex-end" justify="flex-end" >

                <Button variant="outlined" style={{ marginRight: '50px', color: '#5BB24A' }}>
                    Unduh IFUA
</Button>
            </Grid>
            <Grid item >

                <Paper style={{ height: '50vh' }}>
                    <div style={{ paddingTop: '20px', paddingLeft: '20px' }}> <Typography variant="subtittle1"> Jenis File yang diunggah adalah .csv dengan ukuran masimal 30MB</Typography></div>

                    <Paper style={{ margin: '20px', height: '36vh', borderStyle: 'dotted', boxShadow: 'none', borderColor: 'grey' }}>
                        <Grid container direction="column" alignItems="center" justify="center" style={{paddingTop:'50px'}}>
                            <Grid item >  <CloudUploadOutlinedIcon style={{ fontSize: '30px', color: '#5BB24A' }} /></Grid>
                            <Grid item> <Typography>Seret dan jatuhkan file disini </Typography></Grid>
                            <Grid item> <Typography>atau </Typography></Grid>
                            <Grid item>
                          <Fragment>
        <input
          color="primary"
          accept="image/*"
          type="file"
     
          id="icon-button-file"
          style={{ display: 'none', }}
        />
        <label htmlFor="icon-button-file">
          <Button
          
            component="span"
           
            size="large"
           
            variant="outlined" style={{ color: '#5BB24A' }}>
            Cari File
           
          </Button>
        </label>
      </Fragment>
                                
                                  
                                  </Grid>
                        </Grid>
                    </Paper>

                </Paper>
            </Grid>
        </Grid>
    )
}



uploaddata.Layout = Dashboard;