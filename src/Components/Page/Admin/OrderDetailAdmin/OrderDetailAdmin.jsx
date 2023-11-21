import React, { useState, useEffect } from "react";
import "./OrderDetailAdmin.css";
import Topbar from "../../../Common/Topbar/Topbar";
import Sidebar from "../../../Common/Sidebar/Sidebar";
import { useParams, useLocation } from "react-router-dom";
import OrderDataService from "../../../services/orders";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import LayoutAdmin from "../../../Common/LayoutAdmin";
import {Box} from "@mui/material";

export default function OrderDetailAdmin() {
  const { orderId } = useParams();
  const location = useLocation();
  const [orderDetail, setOrderDetail] = useState([]);

  useEffect(() => {
    getOrderDetail();
  }, []);
  const getOrderDetail = () => {
    // OrderDataService.getOrderDetail(orderId).then((res) => {
    //   setOrderDetail(res.data);
    // });
  };
  const [status, setStatus] = useState(location.state.order.status);

  const editStatus = () => {
    const data = {
      status: status,
    };
    console.log(data);
    // OrderDataService.editOrder(orderId, data)
    //   .then((res) => {
    //     console.log(res);
    //     handleClose();
    //     handleClick();
    //   })
    //   .catch((err) => console.log(err));
  };
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  return (
    <Box>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alert.severity}
          sx={{ width: "100%" }}
        >
          Chỉnh sửa thành công
        </Alert>
      </Snackbar>
      <LayoutAdmin>
        <Box className="orderInfor">
          <Box className="orderInforItem">
            <span className="orderInfortitle">Thông tin giao hàng </span>
            <Box className="orderInforDetail">
              <p>
                <span>Họ tên:</span>
                {location.state.order.name}{" "}
              </p>
              <p>
                <span>Địa chỉ:</span>
                {location.state.order.address}
              </p>
              <p>
                <span>SĐT:</span>
                {location.state.order.phone}{" "}
              </p>
              {location.state.order.gmail ? (
                <p>
                  <span>Gmail:</span>
                  {location.state.order.gmail}{" "}
                </p>
              ) : null}
              {location.state.order.note ? (
                <p>
                  <span>Note:</span>
                  {location.state.order.note}{" "}
                </p>
              ) : null}
            </Box>
          </Box>
          <Box className="orderInforItem">
            <span className="orderInfortitle">Thông tin thanh toán </span>
            <Box className="orderInforDetail">
              {location.state.order.pay_method === "cod" ? (
                location.state.order.status === "Đã giao hàng" ? (
                  <Box className="">
                    <p>Thanh toán khi nhận hàng</p>
                    <p className="success">Thanh toán thành công</p>
                  </Box>
                ) : (
                  <Box className="">
                    <p>Thanh toán khi nhận hàng</p>
                    <p className="success">Chưa thanh toán</p>
                  </Box>
                )
              ) : (
                <Box>
                  <p>Thanh toán qua {location.state.order.pay_method}</p>
                  <p className="success">Thanh toán thành công</p>
                </Box>
              )}
            </Box>
          </Box>
          <Box className="orderInforItem">
            <Box className="orderInfortitle">Trạng thái (Tùy chỉnh)</Box>
            <Box className="orderInforDetail">
              <p className="success">Hiện tại: {status}</p> <br />
              <label style={{ marginRight: "15px", fontWeight: "600" }}>
                Tùy chỉnh:{" "}
              </label>
              <select onChange={(e) => setStatus(e.target.value)}>
                <option value="Đang xử lý">Đang xử lý</option>
                <option value="Đang vận chuyển">Đang vận chuyển</option>
                <option value="Hoàn thành">Hoàn thành</option>
              </select>
              <button className="editStatusBtn" onClick={editStatus}>
                Sửa
              </button>
            </Box>
          </Box>
        </Box>
        <Box className="orderProducts">
          <table className="orderProductsTable">
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th> Giá </th>
                <th> Số lượng </th>
                <th> Tạm tính</th>
              </tr>
            </thead>
            <tbody>
              {orderDetail.map((product) => (
                <tr>
                  <td>
                    <Box className="orderProductItem">
                      <img src={product.path} alt="Img" />
                      <Box className="orderProductInfor">
                        <p>{product.name}</p>
                        <p>
                          <span style={{ marginRight: "10px" }}>Màu:</span>
                          <span
                            style={{
                              backgroundColor: product.color,
                              borderRadius: "50%",
                              border: "1px solid black",
                              padding: "0 0 0px 20px ",
                            }}
                          ></span>
                        </p>
                        <p>
                          <span>Size: {product.size}</span>
                        </p>
                      </Box>
                    </Box>
                  </td>
                  <td>{Number(product.amount).toLocaleString("vi-VN")} đ</td>
                  <td>{product.qty}</td>
                  <td>{Number(product.total).toLocaleString("vi-VN")} đ</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Box>
      </LayoutAdmin>
    </Box>
  );
}
