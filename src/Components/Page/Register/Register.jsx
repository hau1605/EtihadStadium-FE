import React from "react";
import "../Login/Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Box, Toolbar, Typography, AppBar, IconButton, Avatar, Divider, Grid, MenuItem, Menu } from "@mui/material";
import { AccountCircleOutlined, YouTube, Instagram, Twitter, Facebook, LinkedIn, Language, ArrowUpward, AcUnit, Spa, Sailing, Hive, Diamond } from '@mui/icons-material';
function Register() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const registerHandle = async (e) => {
    e.preventDefault();
    let newUser = {
      email: email,
      name: name,
      password: password,
      confirmPassword: confirmPassword,
      dateOfBirth: dateOfBirth,
    };
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios
      .post(
        "http://localhost:8080/user/register",
        newUser,
        config
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/Login");
          alert("Đăng ký thành công");
        } else {
          alert(res.data.message);
        }
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
              <img style={{ height: '80px', margin: '10px 0' }} src="https://www.mancity.com/dist/images/logos/crest.svg" alt="Link to Manchester City homepage" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="player-banner">
        <img src="../../../img/player_login.png" alt="" className="player-banner__player-image" />
      </div>
      <main className="container page-wrapper">
        <div className="tab-header">
          <a href="/Login" className="tab-header__button tab-header__button--left ">LOGIN</a>
          <a href="/Register" className="tab-header__button tab-header__button--right is-active">REGISTER</a>
        </div>
        <section className="page-content">
          <div className="regismain">
            <div className="regisForm-format">
              <form autoComplete="on">
                <p style={{ margin: '0' }}>Username</p>

                <input style={{
                  display: 'flex', alignItems: 'center', borderRadius: '5px',
                  border: '1px solid #38D6FF',
                  width: '100%', padding: '5px 15px 8px',
                  margin: '10px 0 15px'
                }}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <p style={{ margin: '0' }}>Fullname</p>

                <input style={{
                  display: 'flex', alignItems: 'center', borderRadius: '5px',
                  border: '1px solid #38D6FF',
                  width: '100%', padding: '5px 15px 8px',
                  margin: '10px 0 15px'
                }}
                  type="text"
                  name="fullname"
                  placeholder="Họ và tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <p style={{ margin: '0' }}>Password</p>
                <input style={{
                  display: 'flex', alignItems: 'center', borderRadius: '5px',
                  border: '1px solid #38D6FF',
                  width: '100%', padding: '5px 15px 8px',
                  margin: '10px 0 15px'
                }}
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                  title="Mật khẩu tối thiểu 6 kí tự"
                  required
                />
                <p style={{ margin: '0' }}>Confirm Password</p>
                <input style={{
                  display: 'flex', alignItems: 'center', borderRadius: '5px',
                  border: '1px solid #38D6FF',
                  width: '100%', padding: '5px 15px 8px',
                  margin: '10px 0 15px'
                }}
                  type="password"
                  name="confirmpassword"
                  placeholder="Nhập lại mật khẩu"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <p style={{ margin: '0' }}>Date Of Birth</p>

                <input style={{
                  display: 'flex', alignItems: 'center', borderRadius: '5px',
                  border: '1px solid #38D6FF',
                  width: '100%', padding: '5px 15px 8px',
                  margin: '10px 0 15px'
                }}
                  type="date"
                  name="dateOfBirth"
                  placeholder="Nhập lại mật khẩu"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  required
                />
                <button style={{
                  width: '100%', padding: '5px 0 6px', color: 'white',
                  backgroundColor: '#001838', fontWeight: 'bold', borderRadius: '8px'
                }} onClick={registerHandle} type="submit" name="submit">
                  ĐĂNG KÝ
                </button>
              </form>
            </div>
          </div>
          <section className="page-content__footer">
            <div>
              <h5>
                You had an account?
                <a href="/Login" className="button__link">{" "}  Login Now</a>
              </h5>
            </div>
          </section>
        </section>
      </main>
      <Box p={4} bgcolor='#98C5E9' style={{ marginTop: '100px' }}>
        <Grid container mb={3}>
          <Grid item md={2} sm={6} display='flex' alignItems='center' justifyContent='center'>
            <Avatar alt="man city" src="https://www.mancity.com/dist/images/logos/crest.svg" sx={{ width: 200, height: 200 }} />
          </Grid>
          <Grid item md={8} sm={12}>
            <Box display="flex" justifyContent='center'>
              <IconButton sx={{ bgcolor: '#083456', mr: 3 }}>
                <YouTube fontSize="large" sx={{ color: "#3bd6ff" }} />
              </IconButton>
              <IconButton sx={{ bgcolor: '#083456', mr: 3 }}>
                <Instagram fontSize="large" sx={{ color: "#3bd6ff" }} />
              </IconButton>
              <IconButton sx={{ bgcolor: '#083456', mr: 3 }}>
                <Twitter fontSize="large" sx={{ color: "#3bd6ff" }} />
              </IconButton>
              <IconButton sx={{ bgcolor: '#083456', mr: 3 }}>
                <Facebook fontSize="large" sx={{ color: "#3bd6ff" }} />
              </IconButton>
              <IconButton sx={{ bgcolor: '#083456', mr: 3 }}>
                <LinkedIn fontSize="large" sx={{ color: "#3bd6ff" }} />
              </IconButton>
              <IconButton sx={{ bgcolor: '#083456', mr: 3 }}>
                <Language fontSize="large" sx={{ color: "#3bd6ff" }} />
              </IconButton>
            </Box>
            <Box display="flex" mt={4} justifyContent='center'>
              <Typography variant="h5" sx={{ ml: 2, color: 'white' }}>Accessibility</Typography>
              <Typography variant="h5" sx={{ ml: 2, color: 'white' }}>Fair Processing Notice</Typography>
              <Typography variant="h5" sx={{ ml: 2, color: 'white' }}>Cookie Policy</Typography>
              <Typography variant="h5" sx={{ ml: 2, color: 'white' }}>Privacy Policy</Typography>
              <Typography variant="h5" sx={{ ml: 2, color: 'white' }}>Terms of Use</Typography>
            </Box>
            <Box display="flex" mt={4} justifyContent='center'>
              <Typography variant="h5" sx={{ ml: 2, color: 'white' }}>Contact Us</Typography>
              <Typography variant="h5" sx={{ ml: 2, color: 'white' }}>Sitemap</Typography>
            </Box>
          </Grid>
          <Grid item md={2} sm={6} display='flex' alignItems='center' justifyContent='center'>
            <Typography variant="h5"
              sx={{ ml: 2, textDecoration: 'underline', color: 'white' }}>
              Back to the top
              <IconButton>
                <ArrowUpward fontSize="large" sx={{ color: "white" }} />
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ height: 2, borderColor: '#ccc' }} />

      </Box>
    </div>
  );
}
export default Register;