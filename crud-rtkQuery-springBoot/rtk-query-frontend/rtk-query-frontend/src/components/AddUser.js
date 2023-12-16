import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddUserMutation, useGetUsersQuery } from "../api/usersApi";

const AddUser = () => {
  const [userName, setUserName] = useState("");
  const [addUser] = useAddUserMutation();
  const { refetch } = useGetUsersQuery();
  const nav = useNavigate();
  const onAdd = async () => {
    await addUser(userName);
    refetch();
    nav("/users");
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter userName"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button onClick={onAdd}>Add</button>
    </>
  );
};

export default AddUser;
