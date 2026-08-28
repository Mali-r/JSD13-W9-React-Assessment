import React from "react";
import Home from "./01_Home";

export default function UserSection() {
  return (
    <div>
      <Home />
      <div className="flex flex-col items-center">
        <div className="my-6 border text-center w-[80%]">
          Table
        </div>
      </div>
    </div>
  );
}
