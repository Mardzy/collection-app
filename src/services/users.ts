import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User, UserProps } from "@types";
import { DELETE, PATCH, POST } from ".";

export const usersAPI = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "new url to add when ready"
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<UserProps, string>({
      query: (id) => `users/${id}`
    }),
    addUser: builder.mutation<void, User>({
      query: (body: User) => ({
        url: "users",
        method: POST,
        body
      })
    }),
    updateUser: builder.mutation<void, User>({
      query: ({ id, ...body }: User) => ({
        url: `users/${id}`,
        method: PATCH,
        body
      })
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id: string) => ({
        url: `users/${id}`,
        method: DELETE
      })
    })
  })
});

export const {
  useAddUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation
} = usersAPI;
