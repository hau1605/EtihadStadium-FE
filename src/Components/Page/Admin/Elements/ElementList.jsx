import React, {useState} from "react";
// import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LayoutAdmin from "../../../Common/LayoutAdmin";
import {listElement} from "../dummyData";

export default function ElementList() {
  // delete
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState(-1);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setUserId(id);
  };
  const handleDelete = (id) => {
    handleClose();
    // UserDataService.deleteUser(id)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "type", headerName: "Type", width: 150},
    { field: "color", headerName: "Color", width: 150 }, 
    { field: "height", headerName: "Height", width: 150 },
    { field: "size", headerName: "Size", width: 150 },
    { field: "element", headerName: "Element", width: 200 },
    {
      field: "action",
      headerName: "Hành động",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/Admin/User/" + params.row.id}>
              <button className="userListEdit">
                {" "}
                <Edit />{" "}
              </button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleShow(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <LayoutAdmin>
      <DataGrid
        rows={listElement}
        getRowId={(row) => row.id}
        disableRowSelectionOnClick
        columns={columns}
        checkboxSelection
        initialState={{
          pagination: {
            paginationModel: { pageSize: 25, page: 0 },
          },
        }}
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn xóa không?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e) => handleDelete(userId)}>
            Xóa
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>
    </LayoutAdmin>
  );
}
