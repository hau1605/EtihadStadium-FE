import React from "react";
import {Box, Toolbar, Typography, Button, AppBar, IconButton, Avatar, Divider, Grid} from "@mui/material";
import {Menu, AccountCircleOutlined, YouTube, Instagram, Twitter, Facebook, LinkedIn, Language, ArrowUpward} from '@mui/icons-material';

const LayoutBasic = ({ children }) => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{py: 1, bgcolor: '#98c5e9', color: '#98c5e9'}}>
            {/* <IconButton sx={{mr: 2}}>
              <Menu sx={{color: 'white'}} fontSize="large"/>
            </IconButton> */}
            <Avatar
              alt="man city"
              src="https://www.mancity.com/dist/images/logos/crest.svg"
              sx={{ width: 80, height: 80 }}
            />
            <Typography variant="h5" sx={{ml: 2, color: '#001838'}}>HOME</Typography>
            <Typography variant="h5" sx={{ml: 2, color: '#001838'}}>VIDEOS</Typography>
            <Typography variant="h5" sx={{ml: 2, color: '#001838'}}>PLAYERS</Typography>
            <Typography variant="h5" sx={{ml: 2, color: '#001838'}}>RANKING</Typography>
            <Typography variant="h5" sx={{ml: 2, color: '#001838', flexGrow: 1}}>ETIHAD STADIUM</Typography>
            <Button>
              <Typography variant="h5" sx={{color: "#001838"}}>Login</Typography>
              <IconButton>
                <AccountCircleOutlined fontSize="large" sx={{color: '#001838'}}/>
              </IconButton>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
      <Box p={4} bgcolor='#001838'>
        <Grid container mb={3}>
          <Grid item xs={2} display='flex' alignItems='center' justifyContent='center'>
            <Avatar alt="man city" src="https://www.mancity.com/dist/images/logos/crest.svg" sx={{width: 200, height: 200}}/>
          </Grid>
          <Grid item xs={8} >
            <Box display="flex" justifyContent='center'>
              <IconButton sx={{bgcolor: '#083456', mr: 3}}>
                <YouTube fontSize="large" sx={{color:"#3bd6ff"}} />
              </IconButton>
              <IconButton sx={{bgcolor:'#083456', mr: 3}}>
                <Instagram fontSize="large" sx={{color:"#3bd6ff"}}/>
              </IconButton>
              <IconButton sx={{bgcolor:'#083456', mr: 3}}>
                <Twitter fontSize="large" sx={{color:"#3bd6ff"}}/>
              </IconButton>
              <IconButton sx={{bgcolor:'#083456', mr: 3}}>
                <Facebook fontSize="large" sx={{color:"#3bd6ff"}}/>
              </IconButton>
              <IconButton sx={{bgcolor:'#083456', mr: 3}}>
                <LinkedIn fontSize="large" sx={{color:"#3bd6ff"}}/>
              </IconButton>
              <IconButton sx={{bgcolor:'#083456', mr: 3}}>
                <Language fontSize="large" sx={{color:"#3bd6ff"}}/>
              </IconButton>
            </Box>
            <Box display="flex" mt={4} justifyContent='center'>
              <Typography variant="h5" sx={{ml: 2, color: 'white'}}>Accessibility</Typography>
              <Typography variant="h5" sx={{ml: 2, color: 'white'}}>Fair Processing Notice</Typography>
              <Typography variant="h5" sx={{ml: 2, color: 'white'}}>Cookie Policy</Typography>
              <Typography variant="h5" sx={{ml: 2, color: 'white'}}>Privacy Policy</Typography>
              <Typography variant="h5" sx={{ml: 2, color: 'white'}}>Terms of Use</Typography>
            </Box>
            <Box display="flex" mt={4} justifyContent='center'>
              <Typography variant="h5" sx={{ml: 2, color: 'white'}}>Contact Us</Typography>
              <Typography variant="h5" sx={{ml: 2, color: 'white'}}>Sitemap</Typography>
            </Box>
          </Grid>
          <Grid item xs={2} display='flex' alignItems='center' justifyContent='center'>
            <Typography variant="h5" 
            sx={{ml: 2, textDecoration: 'underline', color: 'white'}}>
            Back to the top
              <IconButton>
                <ArrowUpward fontSize="large" sx={{color: "white"}}/>
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{height: 2, borderColor: '#ccc'}}/>
        <Grid container mt={3}>
            <Grid item xs={3}>
              <Typography variant="h5" sx={{ml: 2, color: 'white', textDecoration: 'underline', fontWeight: 400}}>Fan Support</Typography>
            </Grid>
            <Grid item xs={6}>

            </Grid>
            <Grid item xs={3} display='flex' alignItems='center' justifyContent='center'>
              <Typography variant="h5" sx={{ml: 2, color: 'white', fontWeight: 200}}>Manchester City FC Ltd 2023</Typography>
            </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LayoutBasic;
