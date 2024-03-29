import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Default from './Components/Default/Default.jsx'
import Home from './Components/Home/Home.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Default></Default>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider
    router={router}
    ></RouterProvider>
  </React.StrictMode>,
)
