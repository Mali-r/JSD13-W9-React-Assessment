import React from "react";
import { useState } from "react";
import Home from "./01_Home";
import dataUsers from "../mock-data/user";

export default function AdminSection() {
  const [userList, setUserList] = useState(dataUsers);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleSave = () => {
    if (!name || !lastname || !position) {
      alert("Please Fill in every field.");
      return;
    } else {
      alert(`Added: ${name} ${lastname}.`);
    }

    // Add user
    const newUser = {
      id: Date.now().toString(), // set unique id for data
      name,
      lastname,
      position,
    };

    // Add to dataUsers
    setUserList([...userList, newUser]);

    // reset form
    setName("");
    setLastname("");
    setPosition("");
  };

  // Delete
  const handleDelete = (id) => {
    setUserList(userList.filter((user) => user.id != id));
  };

  return (
    <div>
      <Home />
      <div className="flex flex-col justify-center">
        <div className="flex flex-col mx-8 my-4 items-center">
          <label className="font-semibold my-2">Create User Here</label>
          <div className="flex flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Name"
              className="input input-xs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="input input-xs"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Position"
              className="input input-xs"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <button
              onClick={handleSave}
              className="btn btn-xs btn-info btn-soft"
            >
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
                {userList.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.lastname}</td>
                    <td>{user.position}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="btn btn-xs btn-soft btn-error "
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
