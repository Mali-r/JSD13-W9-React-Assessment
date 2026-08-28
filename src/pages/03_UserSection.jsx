import React from "react";
import { useState } from "react";
import Home from "./01_Home";
import users from "../mock-data/user";

export default function UserSection() {

  const [userList] = useState(users);
 
  return (
    <div>
      <Home />
      <div className="flex my-4 justify-center">
        <div className="overflow-x-auto h-96 w-[80%]">
          <table className="table table-xs table-pin-col text-center">
            <thead>
              <tr>
                <td>Name</td>
                <td>Last Name</td>
                <td>Position</td>
              </tr>
            </thead>
            <tbody>
              {userList.map((user) => (
                <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.position}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
