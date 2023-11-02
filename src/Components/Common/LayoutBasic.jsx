import React from "react";
import {Box, Toolbar, Typography, Button, AppBar, IconButton, Avatar, Divider, Grid, MenuItem, Menu} from "@mui/material";
import {AccountCircleOutlined, YouTube, Instagram, Twitter, Facebook, LinkedIn, Language, ArrowUpward, AcUnit, Spa, Sailing, Hive, Diamond, Image} from '@mui/icons-material';

const LayoutBasic = ({ children }) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{py: 1, bgcolor: '#98c5e9', color: '#98c5e9'}}>
            <Avatar
              alt="man city"
              src="https://www.mancity.com/dist/images/logos/crest.svg"
              sx={{ width: 80, height: 80 }}
            />
            <Button sx={{ml: 2, color: '#001838'}}>
              <Typography variant="h5">HOME</Typography>
            </Button>
            <Button sx={{ml: 2, color: '#001838'}}>
              <Typography variant="h5">VIDEOS</Typography>
            </Button>zz
            <Button sx={{ml: 2, color: '#001838'}}>
              <Typography variant="h5" >PLAYERS</Typography>
            </Button>
            <Button sx={{ml: 2, color: '#001838'}}> 
              <Typography variant="h5" >TOURS</Typography>
            </Button>
            <Box>
              <Button onClick={handleClick} sx={{ml: 2, color: '#001838'}}>
                <Typography variant="h5">STADIUM</Typography>
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem sx={{minWidth: 120, justifyContent: 'center'}} onClick={handleClose}>Skema</MenuItem>
                <MenuItem sx={{minWidth: 120, justifyContent: 'center'}} onClick={handleClose}>Visit 3D</MenuItem>
              </Menu>
            </Box>
            <Button sx={{flex: 'auto', justifyContent: 'end'}}>
              <Typography variant="h5" sx={{color: "#001838"}}>Login</Typography>
              <IconButton>
                <AccountCircleOutlined fontSize="large" sx={{color: '#001838'}}/>
              </IconButton>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
      <Box display='flex' py={2} justifyContent='center' className='etihad-puma'> 
        <img style={{objectFit:'fill'}} src="https://www.mancity.com/meta/media/hpnbkq5d/partner_logo_etihad.png?width=160&height=80" alt='etihad'/>
        <img src="https://www.mancity.com/meta/media/j20jxszx/partner_logo_puma.png?width=160&height=80" alt='puma'/>
      </Box>
      <Box p={4} bgcolor='#001838'>
        <Grid container mb={3}>
          <Grid item md={2} sm={6}  display='flex' alignItems='center' justifyContent='center'>
            <Avatar alt="man city" src="https://www.mancity.com/dist/images/logos/crest.svg" sx={{width: 200, height: 200}}/>
          </Grid>
          <Grid item md={8} sm={12}>
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
          <Grid item md={2} sm={6} display='flex' alignItems='center' justifyContent='center'>
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
            <Grid item xs={2}>
              <Typography variant="h5" sx={{ml: 2, color: 'white', textDecoration: 'underline', fontWeight: 400}}>Fan Support</Typography>
            </Grid>
            <Grid item xs={8} display='flex' alignItems='center' justifyContent='center'>
              <IconButton sx={{bgcolor:'#083456', mr: 3}}>
                <AcUnit fontSize="large" sx={{color:"#3bd6ff"}}/>
              </IconButton>
              <IconButton sx={{bgcolor:'#083456', mr: 3}}>
                <Spa fontSize="large" sx={{color:"#3bd6ff"}}/>
              </IconButton>
              <IconButton sx={{bgcolor:'#083456', mr: 3}}>
                <Sailing fontSize="large" sx={{color:"#3bd6ff"}}/>
              </IconButton>
              <IconButton sx={{bgcolor:'#083456', mr: 3}}>
                <Hive fontSize="large" sx={{color:"#3bd6ff"}}/>
              </IconButton>
              <IconButton sx={{bgcolor:'#083456', mr: 3}}>
                <Diamond fontSize="large" sx={{color:"#3bd6ff"}}/>
              </IconButton>
            </Grid>
            <Grid item xs={2} display='flex' alignItems='center' justifyContent='center'>
              <Typography variant="h5" sx={{ml: 2, color: 'white', fontWeight: 200}}>Manchester City FC Ltd 2023</Typography>
            </Grid>
        </Grid>
      </Box>
      
    </Box>
  );
};

export default LayoutBasic;
