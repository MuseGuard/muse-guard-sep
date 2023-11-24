import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import About from './Pages/About';
import Info from './Pages/Info';
import Artefact from './Pages/Artefact';
import AuthPage from './Pages/Auth'; // Update the import

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/data",
        element: <Info />,
      },
      {
        path: "/manage",
        element: <Artefact />,
      },
      // Add a Route for AuthPage
      {
        path: "/auth",
        element: <AuthPage />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();




/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages/Home';
import About from './Pages/About';
import Info from './Pages/Info';
import Artefact from './Pages/Artefact';
import AuthPage from './Pages/Auth';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/data",
        element: <Info />,
      },
      {
        path: "/manage",
        element: <Artefact />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
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

reportWebVitals();
*/