import React from "react";

import { AdminLayout } from "../layout";
import { CardDetail, CardEdit } from "../components";

const User = () => {
  return (
    <AdminLayout>
      <h2 className="text-xl font-semibold">Profile User</h2>
      <div className="flex flex-wrap w-full mt-5 -mx-2">
        <div className="w-full px-2 mb-5 md:w-1/3 md:mb-0">
          <div className="p-5 bg-white rounded-lg shadow-xl">
            <CardDetail user></CardDetail>
          </div>
        </div>
        <div className="w-full px-2 md:w-2/3">
          <div className="p-5 bg-white rounded-lg shadow-xl">
            <CardEdit label="Edit User" user></CardEdit>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default User;
