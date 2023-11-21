import React, { useState, useEffect } from "react";
import "./TypeProductList.css";
import { DataGrid } from "@mui/x-data-grid";
import { Add, DeleteOutline, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import ProductDataService from "../../../services/products";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import LayoutAdmin from "../../../Common/LayoutAdmin";
import {listTour} from '../dummyData';

export default function TypeProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, [products]);

  const getProducts = () => {
    // ProductDataService.adminGetProducts()
    //   .then(function (res) {
    //     setProducts(res.data);
    //   })
    //   .catch((err) => console.log(err));
  };
  // modal after click delete
  
  const [show, setShow] = useState(false);
  const [productId, setProductId] = useState(-1);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setProductId(id);
  }
  const handleDelete = (id) => {
    handleClose()
    ProductDataService.deleteProduct(id)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  var vnd = Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 50,
      renderCell: (params) => {
        return <p>{params.row.id}</p>;
      },
    },
    {
      field: "product",
      headerName: "Sản phẩm",
      width: 350,
      renderCell: (params) => {
        return <div className="productListItem">{params.row.product}</div>;
      },
    },
    {
      field: "type",
      headerName: "Loại",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {params.row.type}
          </div>
        );
      },
    },
    {
      field: "gia",
      headerName: "Giá",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {vnd.format(params.row.price)}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Hành động",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/Admin/NewTypeProduct"}>
              <Tooltip title="Thêm chi tiết sản phẩm">
                <button className="typeProductListAdd">
                  {" "}
                  <Add />{" "}
                </button>
              </Tooltip>
            </Link>
            <Link to={"/Admin/TypeProduct/" + params.row.id}>
              <button className="typeProductListEdit">
                {" "}
                <Edit />{" "}
              </button>
            </Link>
            <Button variant="primary" onClick={(e)=>handleShow(params.row.id)}>
              <DeleteOutline className="typeProductListDelete" />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <LayoutAdmin>
      <DataGrid
        rows={listTour}
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
          <Button variant="secondary" onClick={(e)=>handleDelete(productId)}>
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
