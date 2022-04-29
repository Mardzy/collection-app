import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { User, UserProps } from "@types";
import { DELETE, PATCH, POST } from ".";

export const {
  useAddUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation
} = createApi({
  reducerPath: "user",
  baseQuery: fetchBaseQuery({
    baseUrl: "new url to add when ready"
  }),
  tagTypes: ["User"],
  endpoints: ({ query, mutation }) => ({
    getUser: query<UserProps, string>({
      query: (id) => `users/${id}`
    }),
    addUser: mutation<void, User>({
      query: (body: User) => ({
        url: "users",
        method: POST,
        body
      })
    }),
    updateUser: mutation<void, User>({
      query: ({ id, ...rest }: User) => ({
        url: `users/${id}`,
        method: PATCH,
        rest
      })
    }),
    deleteUser: mutation<void, string>({
      query: (id: string) => ({
        url: `users/${id}`,
        method: DELETE
      })
    })
  })
});
