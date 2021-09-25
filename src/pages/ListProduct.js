import React from "react";

import { AdminLayout } from "../layout";
import { TableProduct } from "../components";
import { Button } from "../elements";

const ListProduct = () => {
  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">List Products</h2>
        <Button
          link
          label={"+ Create Product"}
          path="/products/create"
        ></Button>
      </div>
      <TableProduct></TableProduct>
    </AdminLayout>
  );
};

export default ListProduct;
