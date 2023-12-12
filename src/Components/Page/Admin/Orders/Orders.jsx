import React, { useState, useEffect } from "react";
import "./Orders.css";
import Topbar from "../../../Common/Topbar/Topbar";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import OrderDataService from "../../../services/orders";
import Moment from "react-moment";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Visibility,  DeleteOutline } from "@mui/icons-material";
import {listOrder} from "../dummyData";
import LayoutAdmin from "../../../Common/LayoutAdmin";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrderList();
  }, []);
  const getOrderList = () => {
    // OrderDataService.getAllOrders().then((res) => {
    //   setOrders(res.data);
    // });
  };

  const [show, setShow] = useState(false);
  const [orderID, setOrderID] = useState(-1);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setOrderID(id);
  };

  const handleDelete = (id) =>{
    handleClose();
    // OrderDataService.deleteOrder(id)
    // .then(res=>window.location.reload())
    // .catch(err=>console.log(err));

  }
  const columns = [
    {
      field: "id",
      headerName: "No",
      width: 50,
    },
    {
      field: "name",
      headerName: "Name",
      width: 180,
    },
    {
      field: "address",
      headerName: "Address",
      width: 200,
    },
    {
        field: "total",
        headerName: "Total",
        width: 100,
        renderCell: (params) => {
          return (
            <div className="orderPrice">
              {Number(params.row.total).toLocaleString("vi-VN")} $
            </div>
          );
        },
      },
    {
      field: "pay_method",
      headerName: "Payment method",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="orderPayMethod">{params.row.pay_method}</div>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="orderStatus">
            {params.row.status}
          </div>
        );
      },
    },
    {
        field: "createdAt",
        headerName: "Created at",
        width: 100,
        renderCell: (params) => {
          return (
            <div className="orderDate">
              <Moment format="DD/MM/YYYY">{params.createdAt}</Moment>
            </div>
          );
        },
      },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/Admin/Orders/" + params.row.id} state={{order: params.row}}>
              <button className="orderDisplayBtn">
                {" "}
                <Visibility />{" "}
              </button>
            </Link>
            <Button variant="primary" onClick={(e)=>handleShow(params.row._id)}>
              <DeleteOutline className="orderDeleteBtn" />
            </Button>
          </>
        );
      },
    },
  ];
  // get STT
  const getRowId = (row, index) => {
    return index + 1; // Trả về số thứ tự từ 1
  };
  // dummy data
  const rowsWithIds = listOrder.map((row, index) => ({ ...row, id: getRowId(row, index) }));
  return (
    <LayoutAdmin>
      <h2>Booking manager</h2>
      <div className="tableOrderList" style={{ height: 800, width: "100%" }}>
      <DataGrid
        rows={rowsWithIds}
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
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có muốn xóa không?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(e)=>handleDelete(orderID)}>
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
