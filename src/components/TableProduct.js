import React, {useState} from "react";
import { DataGrid } from "@mui/x-data-grid";
import {Link} from 'react-router-dom';

import listProduct from "../data/listProduct.json";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const TableProduct = () => {
  const [products, setProducts] = useState(listProduct);

  const handleDelete = (id) => {
    setProducts(products.filter((products) => products.id !== id));
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <div
              className="overflow-hidden bg-white rounded-full"
              style={{ width: 30, height: 30 }}
            >
              <img
                src={params.row.img}
                alt="avatar"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="ml-2">{params.row.name}</h2>
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center">
            <Link to={`/products/detail/${params.row.id}`}>
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
        rows={products}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[6]}
        checkboxSelection
      />
    </div>
  );
};

export default TableProduct;
