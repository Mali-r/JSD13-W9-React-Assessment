import React from "react";
import { useState,useEffect } from "react";
import Home from "./01_Home";
// import users from "../mock-data/user";

const API_URL = "https://6a915f3e7751d35ce47e7161.mockapi.io/members";

export default function UserSection() {
  // const [userList] = useState(users); for Local-Data
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Fetch failed");
        return res.json();
      })
      .then((data) => setUserList(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Home />
      <div className="flex my-4 justify-center">
        <div className="overflow-x-auto h-96 w-[80%]">
          {loading && <p className="text-center my-4">Loading...</p>}
          {error && (
            <p className="text-center my-4 text-error">Error: {error}</p>
          )}

          {!loading && !error && (
            <table className="table table-xs table-pin-row text-center">
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
          )}
        </div>
      </div>
    </div>
  );
}
