import React from "react";
import { useGetUsersQuery } from "../api/usersApi";
import User from "./User";

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery();
  if (error) return <p style={{ textAlign: "center" }}>{error.data.error}</p>;
  return (
    <>
      {isLoading && <p>loading...</p>}
      {!isLoading && data.map((user) => <User key={user.id} {...user} />)}
    </>
  );
};

export default Users;
