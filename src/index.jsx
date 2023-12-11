import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from "react-redux";
import { store } from "./Components/redux/store";
import HomePage from './Components/Page/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPage from './Components/Page/VideoPage/VideoPage';
import PlayerPage from './Components/Page/PlayerPage/PlayerPage';
import Login from './Components/Page/Login/Login';
import Register from './Components/Page/Register/Register';
import DevelopmentPage from './Components/Page/DevelopmentPage/DevelopmentPage';
import TourDetail from './Components/Page/TourDetail/TourDetail';
import ChooseTypeOfTicket from './Components/Page/ChooseTypeOfTicket/ChooseTypeOfTicket';
import Home from './Components/Page/Admin/Home/Home';
import UserList from './Components/Page/Admin/UserList/UserList';
import User from './Components/Page/Admin/User/User';
import NewUser from './Components/Page/Admin/NewUser/NewUser';
import Orders from './Components/Page/Admin/Orders/Orders';
import OrderDetailAdmin from './Components/Page/Admin/OrderDetailAdmin/OrderDetailAdmin';
import TypeProductList from './Components/Page/Admin/TypeProductList/TypeProductList';
import TypeProductEdit from './Components/Page/Admin/TypeProductEdit/TypeProductEdit';
import NewTypeProduct from './Components/Page/Admin/NewTypeProduct/NewTypeProduct';
import TourPage from './Components/Page/Tour/TourPage';
import Checkout from './Components/Page/Checkout/Checkout';
import Model3DPage from './Components/Page/3d/Model3DPage';
import ElementList from './Components/Page/Admin/Elements/ElementList';
import Model3DAdmin from './Components/Page/Admin/3D/3dModal';
import NewPrism from './Components/Page/Admin/NewPrism/NewPrism';
import NewColumn from './Components/Page/Admin/NewColumn/NewColumn';
import NewLine from './Components/Page/Admin/NewLine/NewLine';
import NewMeshobj from './Components/Page/Admin/NewMeshobj/NewMeshobj';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/Video",
        element: <VideoPage />
      },
      {
        path: "/Player",
        element: <PlayerPage />
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Register",
        element: <Register />
      },
      {
        path: "/Development",
        element: <DevelopmentPage />
      },
      {
        path: "/ChooseTime",
        element: <TourDetail />
      },
      {
        path: "/ChooseTypeOfTicket",
        element: <ChooseTypeOfTicket />
      },
      {
        path: "/Checkout",
        element: <Checkout />
      },
      {
        path: "/Tour",
        element: <TourPage/>
      },
      {
        path: "Admin",
        element: <Home />
      },
      {
        path: "Admin/Users",
        element: <UserList />
      },
      {
        path: "Admin/User/:userId",
        element: <User />
      },
      {
        path: "Admin/NewUser",
        element: <NewUser />
      },
      {
        path: "Admin/Orders",
        element: <Orders />
      },
      {
        path: "Admin/Orders/:orderId",
        element: <OrderDetailAdmin />
      },
      {
        path: "Admin/TypeProducts",
        element: <TypeProductList />
      },
      {
        path: "Admin/TypeProduct/:typeProductId",
        element: <TypeProductEdit />
      },
      {
        path: "Admin/NewTypeProduct",
        element: <NewTypeProduct />
      },
      {
        path: "Admin/Elements",
        element: <ElementList />
      },
      {
        path:"Admin/3D",
        element:<Model3DAdmin/>
      },
      {
        path:"Admin/Prism",
        element:<NewPrism/>
      },
      {
        path:"Admin/Column",
        element:<NewColumn/>
      },
      {
        path:"Admin/Line",
        element:<NewLine/>
      },
      {
        path:"Admin/Meshobj",
        element:<NewMeshobj/>
      },
      {
        path:"3d",
        element:<Model3DPage/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
