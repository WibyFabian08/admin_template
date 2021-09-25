import React from "react";

import { AdminLayout } from "../layout";
import { InputText, SelectOption, SelectGender, Button } from "../elements";

const CreateUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("create");
  };
  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold">New User</h2>
      <div className="w-full mt-5 mb-20 md:w-1/2">
        <form action="POST" onSubmit={(e) => handleSubmit(e)}>
          <InputText
            label="Username"
            type="text"
            placeholder="Your Username"
            bordered
          ></InputText>
          <InputText
            label="Full Name"
            type="text"
            placeholder="Your Full Name"
            bordered
          ></InputText>
          <InputText
            label="Email"
            type="email"
            placeholder="Your Email"
            bordered
          ></InputText>
          <InputText
            label="Password"
            type="password"
            placeholder="Your Password"
            bordered
          ></InputText>
          <InputText
            label="Phone"
            type="text"
            placeholder="Your Phone Number"
            bordered
          ></InputText>
          <InputText
            label="Address"
            type="text"
            placeholder="Your Address"
            bordered
          ></InputText>
          <SelectOption></SelectOption>
          <SelectGender></SelectGender>
          <Button create></Button>
        </form>
      </div>
    </AdminLayout>
  );
};

export default CreateUser;
