import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Error from './components/shared/Error/Error.jsx';
import Home from './components/pages/Home/Home.jsx';
import AddAssigment from './components/pages/AddAssigment/AddAssigment.jsx';
import UpdateAssignment from './components/pages/UpdateAssignment/UpdateAssignment.jsx';
import Login from './components/pages/Login/Login.jsx';
import Registration from './components/pages/Registration/Registration.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/assignment",
        element: <h1>Hiii</h1>
      },
      {
        path: "/add-assignment",
        element: <AddAssigment></AddAssigment>
      },
      {
        path: "/update-assignment",
        element: <UpdateAssignment></UpdateAssignment>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
