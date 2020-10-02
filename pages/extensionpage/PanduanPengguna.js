import Dashboard from '../Dashboard'
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, TextField,Grid, FormControlLabel, Checkbox, Box, Button, Card, CardContent, Avatar, Typography, CardActions, Divider } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import fetch from 'node-fetch';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { styled } from "@material-ui/core/styles";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const MyTypography = styled(Typography)({
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '39px',
    color: '#008F4C'
  });
export default function PanduanPengguna({infolist}) {
    
    const router = useRouter();

    const [info, setOwners] = useState(infolist);
    
   
     if(!info[0]) { 
         return <div>loading...</div>
     }
    return <div style={{ margin: '50px' }} >
        <Grid container
            spacing={2}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
            <Grid item >
                <Typography variant="h4" style={{color:'green'}}>PANDUAN PENGGUNA</Typography>
            </Grid> 
            <Grid item  xs={6} >
                <TextField
                margin="dense"
              
                    variant="outlined"
                    fullWidth="true"
                    style={{borderRadius:'10px'}}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
            </Grid>
            <Grid item>
            {info.map((b) => (
                    <ExpansionPanel key={b.id}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <MyTypography id='titleBantuan'>
                                {b.title}
                            </MyTypography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography id='detailBantuan'>
                                {b.detail}
                                <p>Klik <a href={b.url} target="_blank">di sini</a> untuk melihat panduan dalam format file <b>.pdf</b></p>
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                ))}
    </Grid>
            
        </Grid>
    </div>
}

PanduanPengguna.getInitialProps = async (ctx) =>{

    const infolist = [{
      title:  'Panduan Pengisian Form Pendaftaran Peserta',
      detail: 'Panduan untuk pengisian form pendaftaran peserta dapat diunduh melalui url berikut : ',
      url:    '/assets/pdf/Panduan Pengisian Data Untuk Pendaftaran Peserta Tapera kedalam Portal Sitara.pdf'
    }]
    
    return {infolist:infolist};
  }
PanduanPengguna.Layout = Dashboard;