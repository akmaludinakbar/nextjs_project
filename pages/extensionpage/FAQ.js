import Dashboard from '../Dashboard'
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, TextField,Grid, FormControlLabel, Checkbox, Box, Button, Card, CardContent, Avatar, Typography, CardActions, Divider } from '@material-ui/core';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import PropTypes from "prop-types";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles ,withStyles} from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import { styled } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";  
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import MuiTableCell from "@material-ui/core/TableCell";
import fetch from 'node-fetch';
import { useRouter } from 'next/router';
import { useEffect, useState,useRef } from 'react';

const MyTypography = styled(Typography)({
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '39px',
  color: '#008F4C'
});
const useRowStyles = makeStyles({
    root: {
      "& > *": {
        borderBottom: "none"
      }
    }
  });
  const TableCell = withStyles({
    root: {
      borderBottom: "none"
    }
  })(MuiTableCell);
  
  function createData(name, calories, fat, carbs, protein, price) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        { date: "2020-01-05", customerId: "11091700", amount: 3 },
        { date: "2020-01-02", customerId: "Anonymous", amount: 1 }
      ]
    };
  }

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell align="left">{row.name}</TableCell>
          <TableCell align="right">
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
               <TextField 
             
               style={{paddingRight:'50px'}}
               fullWidth="true"
                  id="outlined-multiline-flexible"
                  label="Jawaban"
                  multiline
                  rowsMax={4}
               variant="outlined"  InputProps={{ classes: { input: {height: 200} } }}/>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }




export default function FAQ({infolist}) {
  const router = useRouter();
  
  const textRef = useRef();

 

 const [info, setOwners] = useState(infolist);

 function search()
 {
      
   infolist = infolist.filter(
       (y) => {
           return y.title.toLowerCase().match(textRef.current.value.toLowerCase())
              
               || y.detail.toLowerCase().match(textRef.current.value.toLowerCase())
              
                
       }


   ) 
   var info=setOwners(infolist);
   console.log(infolist);
 }
  useEffect(() => {
    async function loadData() {
      //const response = await fetch('http://10.172.24.130/informations/faq');
      console.log("okeokeokeoke");
      //console.log(response.json);
      const infolist = [ { id: 2, title: "Siapa saja yang akan menjadi Peserta Tapera?", detail: "Berdasarkan UU No.4 Tahun 2016 tentang Tabungan Perumahan Rakyat, bahwa setiap pekerja dan pekerja mandiri yang berpenghasilan paling sedikit sebesar upah minimum wajib menjadi Peserta Tapera"} ,{ id: 4, title: "Apa yang dimaksud Dana Murah Jangka Panjang?", detail: "Dana murah jangka panjang adalah dana dengan suku bunga yang terjangkau yang sekaligus mampu menanggulangi ketidaksesuaian antara jangka waktu sumber biaya dan jangka waktu pengembalian atau tenor kredit pemilikan rumah." },{ id: 6, title: "Apa yang dimaksud Pemilikan Rumah?", detail: "Pemilikan rumah adalah pembelian rumah oleh Peserta dari orang perseorangan atau badan hukum"},{ id: 7, title: "Apa yang dimaksud Program Pembiayaan Pemilikan Rumah dengan mekanisme Sewa Beli?", detail: "Mekanisme sewa beli adalah perjanjian sewa dengan hak opsi untuk membeli rumah yang disewa; pembelian rumah dengan pembayaran secara mencicil dalam hal mana hak milik atas rumah tersebut baru beralih secara sah ke pihak pembeli setelah ia membayar angsuran terakhir."},{ id: 9, title: "Apa yang dimaksud Program Pembiayaan Perbaikan Rumah?", detail: "Perbaikan rumah adalah perbaikan rumah miliknya sendiri di atas tanah miliknya atau tanah bukan miliknya yang layak dijaminkan berdasarkan perjanjian dengan pemilik tanah."}]
      console.log(infolist);
      
      
    }

    if(infolist.length == 0) {
        loadData();
    }
    
  }, []);

  // if(!info[0]) { 
  //     return <div>Data Tidak Ditemukan</div>
  // }
    
  
    return <div style={{ margin: '50px' }} >
        <Grid container
            spacing={2}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
            <Grid item >
                <Typography variant="h4" style={{color:'green'}}>FAQ</Typography>
            </Grid> 
            <Grid item  xs={6} >
                <TextField
                
                  margin="dense"
                  inputRef={textRef}
                 onChange={search}
                    variant="outlined"
                    fullWidth="true"
                    style={{borderRadius:'10px'}}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton onClick={search}  >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid item xs={10}>
            {info.map((b) => (
                    <ExpansionPanel key={b.id} style={{margin:'10px'}}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <MyTypography id='titleFAQ'>
                                {b.title}
                            </MyTypography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography id='detailFAQ'>
                                {b.detail}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}

            </Grid>
            
            
        </Grid>
    </div>
}


FAQ.getInitialProps = async (ctx) =>{
  // const res = await fetch(process.env.Dev.FaqInv);
  const infolist = [ { id: 2, title: "Siapa saja yang akan menjadi Peserta Tapera?", detail: "Berdasarkan UU No.4 Tahun 2016 tentang Tabungan Perumahan Rakyat, bahwa setiap pekerja dan pekerja mandiri yang berpenghasilan paling sedikit sebesar upah minimum wajib menjadi Peserta Tapera"} ,{ id: 4, title: "Apa yang dimaksud Dana Murah Jangka Panjang?", detail: "Dana murah jangka panjang adalah dana dengan suku bunga yang terjangkau yang sekaligus mampu menanggulangi ketidaksesuaian antara jangka waktu sumber biaya dan jangka waktu pengembalian atau tenor kredit pemilikan rumah." },{ id: 6, title: "Apa yang dimaksud Pemilikan Rumah?", detail: "Pemilikan rumah adalah pembelian rumah oleh Peserta dari orang perseorangan atau badan hukum"},{ id: 7, title: "Apa yang dimaksud Program Pembiayaan Pemilikan Rumah dengan mekanisme Sewa Beli?", detail: "Mekanisme sewa beli adalah perjanjian sewa dengan hak opsi untuk membeli rumah yang disewa; pembelian rumah dengan pembayaran secara mencicil dalam hal mana hak milik atas rumah tersebut baru beralih secara sah ke pihak pembeli setelah ia membayar angsuran terakhir."},{ id: 9, title: "Apa yang dimaksud Program Pembiayaan Perbaikan Rumah?", detail: "Perbaikan rumah adalah perbaikan rumah miliknya sendiri di atas tanah miliknya atau tanah bukan miliknya yang layak dijaminkan berdasarkan perjanjian dengan pemilik tanah."}]
     

  // const res2 = await fetch('http://10.172.24.130/informations/bantuan')
  // const data = await res2.json()
  // const join = info.concat(data);
  const data = [{
    title:  'Panduan Pengisian Form Pendaftaran Peserta',
    detail: 'Panduan untuk pengisian form pendaftaran peserta dapat diunduh melalui url berikut : ',
    url:    '/assets/pdf/Panduan Pengisian Data Untuk Pendaftaran Peserta Tapera kedalam Portal Sitara.pdf'
  }]
  
  return {infolist:infolist};
}

FAQ.Layout = Dashboard;