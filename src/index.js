import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './store';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import AddEmployee from './features/employees/AddEmployee';
import EmployeeList from './features/employees/EmployeeList';
import EditEmployee from './features/employees/EditEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <EmployeeList />,
      },
      {
        path: "/add-employee",
        element: <AddEmployee />,
      },
      {
        path: "/edit-employee/:id",
        element: <EditEmployee />,
      }
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

