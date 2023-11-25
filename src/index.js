import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import About from './Pages/About';
import './index.css';
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Info from './Pages/Info';
//import ManageArtefact from './Pages/ManageArtefact';
import Artefact from './Pages/Artefact';
// index.js or index.jsx
import '@fortawesome/fontawesome-free/css/all.min.css';


const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/data",
        element: <Info/>,
      },
      {
        path: "/manage",
        element: <Artefact/>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
