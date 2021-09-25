import React from "react";

import { AdminLayout } from "../layout";
import { TableUser } from "../components";
import { Button } from "../elements";

const ListUser = () => {
  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold">List Users</h2>
        <Button link label={'+ Create User'} path="/users/create"></Button>
      </div>
      <TableUser></TableUser>
    </AdminLayout>
  );
};

export default ListUser;
