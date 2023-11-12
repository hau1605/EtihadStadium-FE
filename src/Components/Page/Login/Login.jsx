import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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
              <img src="https://www.mancity.com/dist/images/logos/crest.svg" alt="Link to Manchester City homepage" />
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
            <h3>Đăng nhập</h3>
            <form action="POST" onSubmit={handleSubmit}>
              <input
                value={useremail}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="username"
                placeholder="Email"
                required
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                value={password}
                name="password"
                placeholder="Mật khẩu"
                required
              />
              <button name="submit" type="submit">
                Đăng nhập
              </button>
            </form>
            <br></br>
            <Link to="/Register">
              <p>Bạn chưa có tài khoản? Đăng ký ngay</p>
            </Link>
          </div>
          <section className="page-content__footer">
            <div>
              <p>
                Don't have an account? 
                <a href="/Register" className="button__link">{" "} Register Now</a>
              </p>
            </div>
          </section>
        </section>
      </main>
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