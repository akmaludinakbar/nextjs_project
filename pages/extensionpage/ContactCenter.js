import Dashboard from '../Dashboard'
import { ExpansionPanel,ExpansionPanelDetails ,List ,ListItem ,ListItemText ,ExpansionPanelSummary ,TextField,Grid, FormControlLabel, Checkbox, Box, Button, Card, CardContent, Avatar, Typography, CardActions, Divider } from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import EmailIcon from '@material-ui/icons/Email';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import CallIcon from '@material-ui/icons/Call';
import BusinessIcon from '@material-ui/icons/Business';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import { styled } from '@material-ui/core/styles';


const MyTypography = styled(Typography)({
    // fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    // fontSize: '32px',
    lineHeight: '39px',
    color: '#008F4C'
  });
export default function ContactCenter() {
    
    return <div style={{ margin: '50px' }} >
        <Grid container
            spacing={2}
            direction="column"
            justify="flex-start"
            alignItems="stretch"
        >
            <Grid item >
                <Typography variant="h4" style={{color:'green'}}>Contact Center</Typography>
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
            <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <MyTypography id='titleContactCenter'>
            Contact Center
          </MyTypography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Grid container direction="column" spacing={1}>
                <Grid item container direction="row" spacing={1}  alignItems="center" > 
                <Grid item xs={1}> <Typography>Call Center </Typography></Grid>
                <Grid item xs={1}>  <IconButton id='btnCall' href="tel:021-156"> <CallIcon fontSize="large" /> </IconButton></Grid>
                <Grid item> <Typography>156</Typography></Grid>
                </Grid>
                <Grid item container direction="row"  spacing={1}  alignItems="center" > 
                <Grid item xs={1}> <Typography> E-mail  </Typography></Grid>
                <Grid item xs={1}> <IconButton id='btnEmail' href='mailto:Layanan@tapera.go.id'> <EmailIcon fontSize="large" /> </IconButton></Grid>
                <Grid item> <Typography> layanan@tapera.go.id  </Typography></Grid>
                </Grid>
                <Grid item container direction="row"  spacing={1}  alignItems="center" > 
                <Grid item xs={1}> <Typography> WhatsApp </Typography></Grid>
                <Grid item xs={1}>   <IconButton id='btnWhatsapp' href='https://api.whatsapp.com/send?phone=628118156156&text='> <WhatsAppIcon fontSize="large" /> </IconButton></Grid>
                <Grid item> <Typography> 08118 156 156  </Typography></Grid>
                </Grid>
                <Grid item container direction="row"  spacing={1}  alignItems="center" > 
                <Grid item xs={1}> <Typography> Alamat </Typography></Grid>
                <Grid item xs={1}>   <IconButton id='btnAlamat' href='https://goo.gl/maps/pHAWJM8E1GwwRY518'> <BusinessIcon fontSize="large" /> </IconButton></Grid>
                <Grid item> <Typography>  BP Tapera Wisma Iskandarsyah Blok B2, B3 dan C3 Jln. Iskandarsyah Raya Kav. 12-14 Kebayoran Baru Jakarta Selatan 12160 </Typography></Grid>
                </Grid>
            </Grid>
          <List>
         
           
    
          
            {/* <ListItem>
              <ListItemText >  Instagram </ListItemText>
              <IconButton id='btnInstagram' href='/'> <InstagramIcon /> </IconButton>
            </ListItem>
            <ListItem>
              <ListItemText >  Twitter </ListItemText>
              <IconButton id='btnTwitter' href='/'> <TwitterIcon /> </IconButton>
            </ListItem>
            <ListItem>
              <ListItemText >  Facebook </ListItemText>
              <IconButton id='btnFacebook' href='/'> <FacebookIcon /> </IconButton>
            </ListItem> */}
          </List>
        </ExpansionPanelDetails>

      </ExpansionPanel>
             </Grid>
           
            
        </Grid>
    </div>
}
ContactCenter.Layout = Dashboard;