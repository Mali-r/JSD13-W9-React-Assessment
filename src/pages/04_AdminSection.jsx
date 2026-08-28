import React from "react";
import { useState, useEffect } from "react";
import Home from "./01_Home";

const API_URL = "https://6a915f3e7751d35ce47e7161.mockapi.io/members";

export default function AdminSection() {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  // GET: load data on mount
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

  // POST: add a new user
  const handleSave = () => {
    if (!name || !lastname || !position) {
      alert("Please Fill in every field.");
      return;
    }

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, lastname, position }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Save failed");
        return res.json();
      })
      .then((savedUser) => {
        setUserList([...userList, savedUser]); // savedUser already has id from mockapi.io
        setName("");
        setLastname("");
        setPosition("");
      })
      .catch((err) => alert(err.message));
  };

  // DELETE: remove a user
  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then((res) => {
        if (!res.ok) throw new Error("Delete failed");
        setUserList(userList.filter((user) => user.id !== id));
      })
      .catch((err) => alert(err.message));
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

        {loading && <p className="text-center my-4">Loading...</p>}
        {error && <p className="text-center my-4 text-error">Error: {error}</p>}

        {!loading && !error && (
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
        )}
      </div>
    </div>
  );
}
