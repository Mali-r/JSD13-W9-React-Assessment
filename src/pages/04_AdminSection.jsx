import React from "react";
import { useState } from "react";
import Home from "./01_Home";

export default function AdminSection() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert(`User sent: ${name} ${lastname}`);
  };

  return (
    <div>
      <Home />
      <div className="flex flex-col justify-center">
        <div className="flex flex-col mx-8 my-4 items-center">
          <label className="font-semibold my-2">Create User Here</label>
          <div className="flex flex-row gap-4 items-center">
            <input type="text" placeholder="Name" className="input input-xs" />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-xs"
            />
            <input
              type="text"
              placeholder="Position"
              className="input input-xs"
            />
            <button onClick={handleSubmit} className="btn btn-xs btn-info">
              Save
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="overflow-x-auto h-96 w-[80%]">
            <table className="table table-xs table-pin-row text-center">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Last Name</td>
                  <td>Position</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Maliwan</td>
                  <td>R.</td>
                  <td>Software Dev</td>
                  <td>
                    <button className="btn btn-xs btn-soft btn-error ">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
