import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "users",
      providesTags: ["User"],
    }),
    getUser: builder.query({
      query: (id) => `users/${id}`,
    }),
    addUser: builder.mutation({
      query: (userName) => ({
        url: "users",
        method: "post",
        body: {
          id: 0,
          userName,
        },
      }),
    }),
    editUser: builder.mutation({
      query: (id, userName) => ({
        url: `users/${id}`,
        method: "put",
        body: {
          id: 1,
          userName: userName,
        },
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: "users/" + id,
        method: "delete",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = usersApi;
