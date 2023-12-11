import React from "react";
import "./Sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
  PersonAddAlt,
  AddBusiness,
  LocalAtm,
  Apartment,
  ViewInAr,
  ViewWeek,
  StackedLineChart,
  RoomPreferences,
  Engineering
} from "@mui/icons-material";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitile">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/Admin" className="link-admin">
              <li className="sidebarListItem">
                <LineStyle className="sidebarIcon" />
                Trang chủ
              </li>
            </Link>
            <Link to="/Admin/Orders" className="link-admin">
              <li className="sidebarListItem">
                <LocalAtm className="sidebarIcon" />
                Quản lý đơn hàng
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitile">Menu</h3>
          <ul className="sidebarList">
            <Link to="/Admin/Users" className="link-admin">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Người dùng
              </li>
            </Link>
            <Link to="/Admin/NewUser" className="link-admin">
              <li className="sidebarListItem">
                <PersonAddAlt className="sidebarIcon" />
                Thêm người dùng
              </li>
            </Link>
            <Link to="/Admin/TypeProducts" className="link-admin">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Tour
              </li>
            </Link>
            <Link to="/Admin/NewTypeProduct" className="link-admin">
              <li className="sidebarListItem">
                <AddBusiness className="sidebarIcon" />
                Thêm Tour
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitile">Công trình</h3>
          <ul className="sidebarList">
            <Link to="/Admin/3D" className="link-admin">
              <li className="sidebarListItem">
                <Apartment className="sidebarIcon" />
                3D Modal 
              </li>
            </Link>
            <Link to="/Admin/Elements" className="link-admin">
              <li className="sidebarListItem">
                <Engineering className="sidebarIcon" />
                Xem thành phần 
              </li>
            </Link>
            <Link to="/Admin/Prism" className="link-admin">
              <li className="sidebarListItem">
                <ViewInAr className="sidebarIcon" />
                Thêm khối
              </li>
            </Link>
            <Link to="/Admin/Column" className="link-admin">
              <li className="sidebarListItem">
                <ViewWeek className="sidebarIcon" />
                Thêm cột
              </li>
            </Link>
            <Link to="/Admin/Line" className="link-admin">
              <li className="sidebarListItem">
                <StackedLineChart className="sidebarIcon" />
                Thêm đường
              </li>
            </Link>
            <Link to="/Admin/Meshobj" className="link-admin">
              <li className="sidebarListItem">
                <RoomPreferences className="sidebarIcon" />
                Thêm đối tượng
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
