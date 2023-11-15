import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {Box, Toolbar, Typography, AppBar, IconButton, Avatar, Divider, Grid, MenuItem, Menu} from "@mui/material";
import {AccountCircleOutlined, YouTube, Instagram, Twitter, Facebook, LinkedIn, Language, ArrowUpward, AcUnit, Spa, Sailing, Hive, Diamond} from '@mui/icons-material';
function Login(props) {
  const [useremail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();
// show model
const [show, setShow] = useState(false);

const handleClose = () => {
    setShow(false);
};
const handleShow = () => setShow(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {
      email: useremail,
      password: password,
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post(
        "http://localhost:8080/user/login",
        user,
        config
      )
      .then((res) => {
        if(res.data.accessToken)
        {
          window.localStorage.setItem(
            "JWT",
            JSON.stringify(res.data.accessToken)
          );
          window.localStorage.setItem(
            "refreshToken",
            JSON.stringify(res.data.refreshToken)
          );
          window.localStorage.setItem("user", JSON.stringify(res.data.user));
          window.localStorage.setItem("Email", useremail);
        }
        else{
          handleShow()
        }
        
        console.log(res.data.user.role)
        if (res.data.user.role === 'admin') navigate("/Admin");
        else navigate("/");
      })
      .catch((err) => {
        console.log("Error" + err);
      });
  };
  return (
    <div className="">
      <nav className="global-nav">
        <ul className="global-nav__inner-wrapper">
          <li className="global-nav__link-wrapper">
            <header className="BackButton container">
              <a href="/" className="global-nav__link">
                <span className="sr-only">
                  Back
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <g fill="currentColor">
                    <path d="M21.508 5.754 23.765 8.01 12.001 19.777 .234 8.01 2.491 5.754 12 15.263"></path>
                  </g>
                </svg>
              </a>
            </header>
          </li>
          <li className="global-nav__logo-wrapper">
            <a href="/">
              <img style={{height:'80px',margin:'10px 0'}}  src="https://www.mancity.com/dist/images/logos/crest.svg" alt="Link to Manchester City homepage" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="player-banner">
        <img src="../../../img/player_login.png" alt="" className="player-banner__player-image" />
      </div>
      <main className="container page-wrapper">
        <div className="tab-header">
          <a href="/Login" className="tab-header__button tab-header__button--left is-active">LOGIN</a>
          <a href="/Register" className="tab-header__button tab-header__button--right">REGISTER</a>
        </div>
        <section className="page-content">
          <div className="loginForm">
            <form action="POST" onSubmit={handleSubmit}>
              <p style={{margin:'0'}}>Username</p>
              <input style={{display:'flex',alignItems:'center',borderRadius:'5px',
              border:'1px solid #38D6FF',
              width:'100%', padding:'5px 15px 8px',
            margin:'10px 0 15px'}}
                value={useremail}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="username"
                placeholder="Email"
                required
              />
              <p style={{margin:'0'}}>Password</p>
              <input style={{display:'flex',alignItems:'center',borderRadius:'5px',
              border:'1px solid #38D6FF',
              width:'100%', padding:'5px 15px 8px',
            margin:'10px 0 15px'}}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                name="password"
                placeholder="Mật khẩu"
                required
              />
              <br />
              <button style={{width:'100%',padding:'5px 0 6px',color:'white',
            backgroundColor:'#001838',fontWeight:'bold', borderRadius:'8px'}} name="submit" type="submit">
                ĐĂNG NHẬP
              </button>
            </form>
          </div>
          <section className="page-content__footer">
            <div>
              <h5>
                Don't have an account? 
                <a href="/Register" className="button__link">{" "} Register Now</a>
              </h5>
            </div>
          </section>
        </section>
      </main>
      <Box p={4} bgcolor='#98C5E9' style={{marginTop:'100px'}}>
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
        
      </Box>
      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Đăng nhập thất bại</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);