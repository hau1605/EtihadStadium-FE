import React, {useState} from "react";
import "../NewUser/NewUser.css";
import UserDataService from "../../../services/users";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LayoutAdmin from "../../../Common/LayoutAdmin";
import {Box, MenuItem, FormControl, Select, Typography, Grid, TextField} from '@mui/material';
import {useForm, useFieldArray} from 'react-hook-form';
import * as Yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'

export default function NewMeshobj() {
  const [name, setName] = useState("");
  const [sdt, setSDT] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    let newUser = {
      email: email,
      name: name,
      phone: sdt,
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
  const [count, setCount] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const countList = new Array(2).fill(0).map((v, index) => {
    return {value: index+1, label: `${index+1}`}
  });

  const validateSchema = Yup.object().shape({
    coordinates: Yup.array().of(
      Yup.object().shape({
        latitude: Yup.string(),
        longitude: Yup.string(),
        height: Yup.string(),
      })
    )
  });

  const {register, control} = useForm({
    mode: 'all',
    defaultValues: {
      coordinates: [
        { latitude: '', longitude: '', height: '' },
      ]
    },
    resolver: yupResolver(validateSchema),
  });

  const {fields, append, remove} = useFieldArray({
    name: 'coordinates',
    control
  });

  const initCount = (num) => {
    return new Array(num).fill(0).map((v, index) => {
      return {
        latitude: '',
        longitude: '', 
        height: '', 
      }
    });
  }

  const changedCount = (id, value) => {
    const fieldLength = fields.length;
    if (id === 'count' && typeof value === 'number') {
      const size = value - fieldLength;
      if(size > 0){
        append(initCount(size));
      } else {
        const arr = [];
        for(let i = 0; i < fieldLength; i++){
          if(fieldLength - i <= value) break;
          arr.push(fieldLength - i - 1);
        }
        remove(arr);
      }
      setCount(value);
    }
  }

  const coordinateContent = fields.map((v, index) => {
    const latitude= `coordinates.${index}.latitude`;
    const longitude = `coordinates.${index}.longitude`;
    const height = `coordinates.${index}.height`;
    return (
      <Grid key={v.id} container rowSpacing={1} columnSpacing={2}
      sx={{display: 'inline-flex', justifyContent: 'left', alignContent: 'stretch', alignItems: 'center'}}>
        <Grid item xs={4}>
          <Box sx={{width: '100%', my: 1}}>
            <TextField 
              fullWidth
              id={latitude}
              variant="outlined"
              {...register(latitude)}
              />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{width: '100%', my: 1}}>
            <TextField 
              fullWidth
              id={longitude}
              variant="outlined"
              {...register(longitude)}
              />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{width: '100%', my: 1}}>
            <TextField 
              fullWidth
              id={height}
              variant="outlined"
              {...register(height)}
              />
          </Box>
        </Grid>
      </Grid>
    )
  })

  return (
    <LayoutAdmin>
      <h2 className="newUserTitle">Add Meshobj</h2>
          <form action=" " className="">
            <div className="newUserForm">
              <div className="newUserItem">
                <label>RotateX</label>
                <input
                  type="text"
                  placeholder="1"
                  onChange={(e) => setSDT(e.target.value)}
                />
              </div>
              <div className="newUserItem">
                <label>RotateY</label>
                <input
                  type="text"
                  placeholder="1"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="newUserItem">
                <label>RotateZ</label>
                <input
                  type="text"
                  placeholder="1"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="newUserItem">
                <label>Color</label>
                <input
                  type="text"
                  placeholder="Black"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="newUserItem">
                <label>Size</label>
                <input
                  type="text"
                  placeholder="1000"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="newUserItem">
                <label>Scale</label>
                <input
                  type="text"
                  placeholder="1000"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="newUserItem">
                <label>Element</label>
                <input
                  type="text"
                  placeholder="Stand A1"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </form>
          <Box mt={5} pr={3}>
            <FormControl fullWidth>
              <Box display='flex'>
                <Box display='flex' justifyContent='center' alignItems='center'>
                  <Typography sx={{flex:1, color: '#808080'}}>Coordinate Count</Typography>
                </Box>
                <Select
                sx={{flex: 4, ml: 8}}
                value={count}
                fullWidth
                onChange={changedCount}
                > 
                  {
                    countList.map(v => (
                      <MenuItem value={v.value}>{v.label}</MenuItem>
                    ))
                  }
                </Select>
              </Box>
              <Grid container rowSpacing={1} columnSpacing={2}
              sx={{display: 'inline-flex', justifyContent: 'left', alignContent: 'stretch', alignItems: 'center'}}>
                <Grid item xs={4}>
                  <Box sx={{width: '100%', my: 1}}>
                    <Typography component="div" sx={{py:2, bgcolor: 'grey.300', textAlign: 'center'}}>
                      Latitude
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{width: '100%', my: 1}}>
                    <Typography component="div" sx={{py:2, bgcolor: 'grey.300', textAlign: 'center'}}>
                      Longitude
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={4}>
                  <Box sx={{width: '100%', my: 1}}>
                    <Typography component="div" sx={{py:2, bgcolor: 'grey.300', textAlign: 'center'}}>
                      Height
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              {coordinateContent}
            </FormControl>
          </Box>
          <Box textAlign='center'>
            <button className="newUserButton" onClick={(e) => handleCreate(e)} style={{}}>
                Create
            </button>
          </Box>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Thông báo</Modal.Title>
          </Modal.Header>
          <Modal.Body>Thêm thành công</Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={(e) => navigate("/Admin/Users")}
            >
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
    </LayoutAdmin>
  );
}
