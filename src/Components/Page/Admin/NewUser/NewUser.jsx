import React, { useState, useEffect } from "react";
import "./NewUser.css";
import UserDataService from "../../../services/users";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LayoutAdmin from "../../../Common/LayoutAdmin";

export default function NewUser() {
  const [level, setLevel] = useState("false");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [sdt, setSDT] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    let newUser = {
      email: email,
      password: password,
      name: name,
      gender: gender,
      address: address,
      birthday: birth,
      phone: sdt,
      level: level,
    };
    UserDataService.createUser(newUser)
      .then((response) => {
        handleShow();
      })
      .catch((e) => {
        alert("Thêm không thành công");
        console.log(e);
      });
  };

  // modal after click

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <LayoutAdmin>
      <h2 className="newUserTitle">Add user account</h2>
          <form action=" " className="">
            <div className="newUserForm">
              <div className="newUserItem">
                <label>Full name</label>
                <input
                  type="text"
                  placeholder="Nguyễn Văn A"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="newUserItem">
                <label>Gender</label>
                <div className="newUserGender">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Nam"
                      onChange={(e) => setGender(e.target.value)}
                    />{" "}
                    Female{" "}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Nữ"
                      onChange={(e) => setGender(e.target.value)}
                    />{" "}
                    Male{" "}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="Khác"
                      onChange={(e) => setGender(e.target.value)}
                    />{" "}
                    Others
                  </label>
                </div>
              </div>
              <div className="newUserItem">
                <label>Type of user</label>
                <select
                  className="newUserSelect"
                  name="active"
                  id="active"
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option value="false">Normal</option>
                  <option value="true">Admin</option>
                </select>
              </div>
              <div className="newUserItem">
                <label>Date of birth</label>
                <input
                  type="date"
                  placeholder="02/30/2000"
                  onChange={(e) => setBirth(e.target.value)}
                />
              </div>
              <div className="newUserItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="012 3456 789"
                  onChange={(e) => setSDT(e.target.value)}
                />
              </div>
              <div className="newUserItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="nguyenvan@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="newUserItem">
                <label>Password</label>
                <input
                  type="text"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="newUserItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="HCM"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <button className="newUserButton" onClick={(e) => handleCreate(e)}>
              Create
            </button>
          </form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notify</Modal.Title>
          </Modal.Header>
          <Modal.Body>Add successfully</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={(e) => navigate("/Admin/Users")}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </LayoutAdmin>
  );
}
