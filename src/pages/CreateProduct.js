import React from "react";

import { AdminLayout } from "../layout";
import { InputText, SelectOption, Button } from "../elements";

const CreateProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("create");
  };
  
  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold">New Product</h2>
      <div className="w-full mt-5 mb-20 md:w-1/2">
        <form action="POST" onSubmit={(e) => handleSubmit(e)}>
          <InputText
            label="Product Name"
            type="text"
            placeholder="Product Name"
            bordered
          ></InputText>
          <InputText
            label="Stock"
            type="number"
            placeholder="Product Stock"
            bordered
          ></InputText>
          <SelectOption></SelectOption>
          <Button create></Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateProduct;
