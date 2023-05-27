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
import UserList from './features/employees/UserList';
import EditEmployee from './features/employees/EditEmployee';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <UserList />,
      },
      {
        path: "/add-user",
        element: <AddEmployee />,
      },
      {
        path: "/edit-user/:id",
        element: <EditEmployee />,
      },
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

