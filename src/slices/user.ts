import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { users } from "./mocks";
import { Status, User, UserProps } from "@types";

const initialState: UserProps = {
  error: "",
  status: Status["IDLE"],
  data: ({} as unknown) as User
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (userId: string, { rejectWithValue }) => {
    try {
      const response: User[] = await JSON.parse(JSON.stringify(users));
      const activeUser = response.find(({ id }) => id === userId);
      return activeUser;
    } catch (err) {
      rejectWithValue((err as Error).message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateInventoryItem",
  async (user: User, { rejectWithValue }) => {
    try {
      console.log("Update users Item", user);
      // put method for users
    } catch (e) {
      console.log("Change Inventory Item Status Error: ", (e as Error).message);
    }
  }
);

export const addUser = createAsyncThunk(
  "user/addInventoryItem",
  async (user: User, { rejectWithValue }) => {
    try {
      console.log("Update users Item", user);
      // put method for users
    } catch (e) {
      console.log("Add Inventory Item Status Error: ", (e as Error).message);
    }
  }
);

export const removeUser = createAsyncThunk(
  "user/removeUser",
  async (id: string, { rejectWithValue }) => {
    try {
      console.log("Update users Item", id);
      // put method for users item transaction
      // post method for transaction
    } catch (e) {
      console.log("Change Inventory Item Status Error: ", (e as Error).message);
    }
  }
);

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.status = Status["IDLE"];
      state.data = ({} as unknown) as User;
    }
  },
  extraReducers: {
    [getUser.pending.type]: (state) => {
      state.status = Status["PENDING"];
    },
    [getUser.fulfilled.type]: (
      state: UserProps,
      action: PayloadAction<User>
    ) => {
      state.status = Status["FULFILLED"];
      state.data = action.payload;
    },
    [getUser.rejected.type]: (state, payload) => {
      state.status = Status["REJECTED"];
      state.error = payload.errorMessage;
    }
  }
});

export const { clearUser } = actions;

export default reducer;
