import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import App from './App';
import HomePage from './Components/Page/HomePage/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import VideoPage from './Components/Page/VideoPage/VideoPage';
import PlayerPage from './Components/Page/PlayerPage/PlayerPage';
import DevelopmentPage from './Components/Page/DevelopmentPage/DevelopmentPage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path:"/Video",
        element:<VideoPage/>
      },{
      path:"/Player",
      element:<PlayerPage/>}
      ,
      {
        path:"/Development",
        element:<DevelopmentPage/>}
      
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
