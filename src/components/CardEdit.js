import React from "react";

import { InputText, Button, InputFile, SelectOption } from "../elements";

const CardEdit = ({label, user, product}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert('updated')
  }

  if(user) {
    return (
      <div>
      <h2 className="text-xl font-semibold">{label}</h2>
      <div className="flex flex-wrap-reverse mt-5">
        <div className="w-full md:w-1/2">
          <form action="POST" onSubmit={(e) => handleSubmit(e)}>
            <InputText
              type="text"
              label="Username"
              placeholder="will08"
            ></InputText>
            <InputText
              type="text"
              label="Full Name"
              placeholder="Wiby Fabian Rianto"
            ></InputText>
            <InputText
              type="email"
              label="Email"
              placeholder="wibyfabian08@gmail.com"
            ></InputText>
            <InputText
              type="text"
              label="Phone"
              placeholder="089663191201"
            ></InputText>
            <InputText
              type="text"
              label="Address"
              placeholder="Garut, Indonesia"
            ></InputText>
            <Button edit></Button>
          </form>
        </div>
        <div className="w-full px-0 mb-5 md:px-5 md:w-1/2 md:mb-0">
          <img
            src="/images/profile.jpg"
            className="object-cover w-full rounded-lg"
            alt="profile"
          />
          <InputFile></InputFile>
        </div>
      </div>
    </div>
    )
  }

  if(product) {
    return (
      <div>
      <h2 className="text-xl font-semibold">{label}</h2>
      <div className="flex flex-wrap-reverse mt-5">
        <div className="w-full md:w-1/2">
          <form action="POST" onSubmit={(e) => handleSubmit(e)}>
            <InputText
              type="text"
              label="Product Name"
              placeholder="Server Google"
            ></InputText>
            <SelectOption></SelectOption>
            <SelectOption stock></SelectOption>
            <Button edit></Button>
          </form>
        </div>
        <div className="w-full px-0 mb-5 md:px-5 md:w-1/2 md:mb-0">
          <img
            src="/images/server.jpg"
            className="object-cover w-full rounded-lg"
            alt="profile"
          />
          <InputFile></InputFile>
        </div>
      </div>
    </div>
    )
  }

  
  return (
    <div>
      <h2 className="text-xl font-semibold">{label}</h2>
      <div className="flex flex-wrap-reverse mt-5">
        <div className="w-full md:w-1/2">
          <form action="POST" onSubmit={(e) => handleSubmit(e)}>
            <InputText
              type="text"
              label="Username"
              placeholder="will08"
            ></InputText>
            <InputText
              type="text"
              label="Full Name"
              placeholder="Wiby Fabian Rianto"
            ></InputText>
            <InputText
              type="email"
              label="Email"
              placeholder="wibyfabian08@gmail.com"
            ></InputText>
            <InputText
              type="text"
              label="Phone"
              placeholder="089663191201"
            ></InputText>
            <InputText
              type="text"
              label="Address"
              placeholder="Garut, Indonesia"
            ></InputText>
            <Button edit></Button>
          </form>
        </div>
        <div className="w-full px-0 mb-5 md:px-5 md:w-1/2 md:mb-0">
          <img
            src="/images/profile.jpg"
            className="object-cover w-full rounded-lg"
            alt="profile"
          />
          <InputFile></InputFile>
        </div>
      </div>
    </div>
  );
};

export default CardEdit;
