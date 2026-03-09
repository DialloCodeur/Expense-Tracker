import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/home.jsx'
import Register from './pages/register.jsx'
import Login from './pages/login.jsx'
import Dashboard from './pages/dashboard.jsx'
import Add_Expense from './pages/add-expense.jsx'
import Reports from './pages/reports.jsx'

let router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "dashboard",
        element: <Dashboard/>
      },
      {
        path: "add_expense",
        element: <Add_Expense/>
      },
      {
        path: "reports",
        element: <Reports/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render( 
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
