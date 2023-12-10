import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home';
import About from './Pages/About';
import './index.css';
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from './App';
import AuthPage from './Components/AuthPage';
import reportWebVitals from './reportWebVitals';
import Info from './Pages/Info';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ArtefactProvider } from './Components/ArtefactContext';
import Artefact from './Pages/Artefact';


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
      {
        path: '/login', 
        element: <AuthPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ArtefactProvider>
      <RouterProvider router={router} />
    </ArtefactProvider>
  </React.StrictMode>
);

reportWebVitals();
