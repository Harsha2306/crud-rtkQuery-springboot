import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Users.module.css";
import { useDeleteUserMutation, useGetUsersQuery } from "../api/usersApi";

const User = ({ id, userName }) => {
  const nav = useNavigate();
  const [deleteUser] = useDeleteUserMutation(id);
  const { refetch } = useGetUsersQuery();
  const onDelete = async () => {
    await deleteUser(id);
    refetch();
  };
  return (
    <div className={classes.divStyles}>
      <p>{id}</p>
      <p>{userName}</p>
      <button onClick={() => nav(`/users/${id}`)}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default User;
