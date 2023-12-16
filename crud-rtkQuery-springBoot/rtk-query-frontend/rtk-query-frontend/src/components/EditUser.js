import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetUserQuery,
  useEditUserMutation,
  useGetUsersQuery,
} from "../api/usersApi";

const EditUser = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetUserQuery(id);
  const inputRef = useRef();
  const { refetch } = useGetUsersQuery();
  const [editUser] = useEditUserMutation();
  const nav = useNavigate();
  
  const onEdit = async () => {
    const response = await editUser(id, inputRef.current.value);
    console.log(response);
    nav("/users");
    refetch();
  };

  useEffect(() => {
    if (!isLoading) inputRef.current.value = data.userName;
  });

  if (isLoading) return <p>loading...</p>;
  if (error) return <p style={{ textAlign: "center" }}>{error.data.error}</p>;

  return (
    <>
      <input ref={inputRef} type="text" placeholder="Enter userName" />
      <button
        onClick={() => {
          onEdit();
        }}
      >
        Submit
      </button>
    </>
  );
};

export default EditUser;
