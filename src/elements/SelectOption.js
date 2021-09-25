import React from "react";

const SelectOption = ({ onChange, stock }) => {
  if (stock) {
    return (
      <div className="flex flex-col mb-5">
        <label htmlFor="username">In Stock</label>
        <select
          onChange={onChange}
          className="px-4 py-2 mt-2 border border-gray-300 border-solid rounded-lg focus:outline-none"
        >
          <option value="">Stock</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-5">
      <label htmlFor="username">Status</label>
      <select
        onChange={onChange}
        className="px-4 py-2 mt-2 border border-gray-300 border-solid rounded-lg focus:outline-none"
      >
        <option value="">Status</option>
        <option value="true">Active</option>
        <option value="false">No Active</option>
      </select>
    </div>
  );
};

export default SelectOption;
