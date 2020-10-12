import React, { Component, Fragment } from 'react'
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
import { TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, CardHeader, Container, FormControlLabel, Checkbox, Box, Button, Card, CardContent, Avatar, Typography, CardActions, Divider, Breadcrumbs, Link } from '@material-ui/core';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import Icon from '@material-ui/core/Icon';
import { autoPlay } from 'react-swipeable-views-utils';
import Router from 'next/router'
import { csv } from 'd3'
import { useFormik } from 'formik'
import * as Yup from 'yup'
// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@material-ui/core';
// import { Grid, Card, CardHeader, CardContent, CardActions, Container, Button, TextField, Table, TableHead, TableBody, TableCell, TableRow, TableContainer, Paper, Typography } from '@material-ui/core'
import Layout from "../components/layout"
import { withAuthSync } from "../utils/auth";
import { Element } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
    table: {
        maxWidth: 500,

    },

    root: {
        minHeight: 670
    },
    paper: {
        margin: theme.spacing(3, 2),
        marginTop: theme.spacing(5),
        padding: theme.spacing(0),
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    typo: {
        fontStyle: 'normal',
        fontWeight: '600',
        // fontSize: '32px',
        lineHeight: '39px',
        color: '#008F4C'
    },
    button: {
        marginBottom:'10px',
        margin: theme.spacing(1, 0, 1),
        borderRadius: 10,
        justify: 'center',
        marginTop: 5,
        marginRight: 10,
        width: 100,
        backgroundColor: '#008F4C',
    },
}));


const initialValues = {
    file: ''
}

const validationSchema = Yup.object().shape({
    file: Yup.mixed().required("Mohon Pilih File Terlebih dahulu")
        .test("fileFormat", "Tipe File Tidak Sesuai", value =>
            value && ['application/vnd.ms-excel'].includes(value.type)
        )
        .test("fileSize", "Ukuran File Melebihi Kapasitas 10Mb", value =>
            value && value.size < 10240000
        )
})

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

    const classes = useStyles();
    const [openDialog, setOpenDialog] = React.useState(false);
    const [openSnackBar, setOpenSnackBar] = React.useState(false);
    const [data, setData] = React.useState([])


    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialogNo = () => {
        setOpenDialog(false);
    };
    const handleCloseDialogYes = () => {
        setOpenDialog(false);
        handleClickOpenSnackBar();
    };

    const handleClickOpenSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleCloseSnackBar = () => {
        setOpenSnackBar(false);
    };

    const formik = useFormik({
        initialValues,
        onSubmit: values => {
            handleClickOpenDialog()
        },
        validationSchema
    })


    return (
        <Grid container direction="column" spacing={1} style={{ paddingTop: '2px' }} >
            <Grid item >
                <Paper style={{ height: '30vh', boxShadow: 'none' }}>
                    <div style={{ paddingLeft: '30px', paddingTop: "35px" }}>   <Typography variant="h6" align="bottom"> Unggah File Data Pekerja</Typography>
                        <Breadcrumbs aria-label="breadcrumb" style={{ paddingTop: '10px' }}>
                        

                            <Typography color="textPrimary">Unggah Data</Typography>
                        </Breadcrumbs>
                    </div>
                </Paper>
            </Grid>
          
            <Grid item >

                <Paper style={{ height: '50vh' }}>
                    <div style={{ paddingTop: '20px', paddingLeft: '20px' }}> <Typography variant="subtittle1"> Jenis File yang diunggah adalah .csv dengan ukuran masimal 10MB</Typography></div>

                    <Paper style={{ margin: '20px', height: '42 vh', borderStyle: 'dotted', boxShadow: 'none', borderColor: 'grey' }}>
                        <Grid container direction="column" alignItems="center" justify="center" style={{ paddingTop: '50px' }}>
                            <Grid item >  <CloudUploadOutlinedIcon style={{ fontSize: '30px', color: '#5BB24A' }} /></Grid>
                            <Grid item> <Typography>Tarik dan lepaskan file disini </Typography></Grid>
                            <Grid item> <Typography>atau </Typography></Grid>
                         
                            <Grid item>
                           
                            <form onSubmit={formik.handleSubmit}>
                 
                    <br/>
                    {/* <TextField id="txtFileName" disable="true" value={formik.values.file.name} variant="outlined" size="small"/> */}
                    <Typography style={{ color: "red" }}>{formik.errors.file}</Typography>
                    <br/>
                    <Button 
                    id="btnBrowsFile" 
                    className={classes.button} 
                    variant="contained" 
                    component="label"
                    color="primary"
                    >
                        Pilih
                    <input id="file" name="file" type="file" style={{ display: "none" }} onChange={(event) => {
                            formik.setFieldValue("file", event.currentTarget.files[0]);
                            csv(URL.createObjectURL(event.target.files[0])).then(data => {
                                setData(data);
                            });
                        }} />
                    </Button>
                    <Button className={classes.button}
                     id="btnSubmit" 
                     variant="contained" 
                     type="submit"
                     color="primary"
                     >Konfirmasi</Button>
                    <Dialog
                        open={openDialog}
                        onClose={handleCloseDialogNo}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Unggah File?"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Apakah Data Pendaftaran Peserta Yang Akan Diunggah Telah Sesuai?
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseDialogNo} color="primary">
                                Tidak
                        </Button>
                            <Button onClick={handleCloseDialogYes} color="primary" autoFocus>
                                Ya
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <Dialog
                        open={openSnackBar}
                        onClose={handleCloseDialogNo}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Unggah Berhasil"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Data Pendaftaran Peserta Telah Kami Terima. Status Pendaftaran Dapat Dilihat Pada Menu Notifikasi
                        </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button href="" onClick={handleCloseSnackBar} color="primary" autoFocus>
                                Oke
                            </Button>
                        </DialogActions>
                    </Dialog>
                    <br></br>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table" style={(formik.errors.file == undefined && formik.values.file == '') || formik.errors.file ? { display: "none" } : { display: "" }}>
                           
                            <TableBody>
                                {data.map((row, index) => {
                                    if (data.length <= 10) {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">{row.Nama}</TableCell>
                                                <TableCell align="right">{row.Nik}</TableCell>
                                                <TableCell align="right">{row.NamaInstitusi}</TableCell>
												<TableCell align="right">{row.Nip}</TableCell>
                                                <TableCell align="right">{row.TanggalLahir}</TableCell>
                                            </TableRow>)
                                    } else {
                                        if (index < 5 || index > data.length - 6) {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell component="th" scope="row">{row.Nama}</TableCell>
                                                <TableCell align="right">{row.Nik}</TableCell>
                                                <TableCell align="right">{row.NamaInstitusi}</TableCell>
												<TableCell align="right">{row.Nip}</TableCell>
                                                <TableCell align="right">{row.TanggalLahir}</TableCell>
                                                </TableRow>)
                                        }
                                    }
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </form>
                  
                            </Grid>
                            
                        </Grid>
                    </Paper>

                </Paper>
            </Grid>
        </Grid>
    )
}



uploaddata.Layout = Dashboard;