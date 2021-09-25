import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import {Link} from 'react-router-dom';

import listUser from "../data/listUser.json";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const TableUser = () => {
  const [users, setUsers] = useState(listUser);

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <div
              className="overflow-hidden bg-white rounded-full"
              style={{ width: 30, height: 30 }}
            >
              <img
                src={params.row.avatar}
                alt="avatar"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="ml-2">{params.row.username}</h2>
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Link to={`/users/detail/${params.row.id}`}>
              <ModeEditOutlineOutlinedIcon style={{color: 'blue', marginRight: '5px'}}></ModeEditOutlineOutlinedIcon>
            </Link>
            <DeleteOutlineIcon onClick={() => handleDelete(params.row.id)} style={{color: 'red', cursor: 'pointer'}}></DeleteOutlineIcon>
          </div>
        )
      }
    },
  ];

  return (
    <div className="bg-white shadow-xl" style={{ height: 450, width: "100%" }}>
      <DataGrid
        rows={users}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
      />
    </div>
  );
};

export default TableUser;
