import React from "react";
import Home from "./01_Home";

export default function UserSection() {
  return (
    <div>
      <Home />
      <div className="flex my-4 justify-center">
        <div className="w-[80%]">
          <table className="table table-xs table-pin-row text-center">
            <thead>
              <tr>
                <td>Name</td>
                <td>Last Name</td>
                <td>Position</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maliwan</td>
                <td>R.</td>
                <td>Software Dev</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
