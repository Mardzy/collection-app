import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  CaseReducer
} from "@reduxjs/toolkit";

import { users } from "./mocks";
// import { createUniqueId } from "./utils";

import { Status, User, UserProps } from "@types";

const initialState: UserProps = {
  error: "",
  status: Status["IDLE"],
  user: ({} as unknown) as User
};

const clearUser: CaseReducer<UserProps> = (state) => {
  state.status = Status["IDLE"];
  state.user = ({} as unknown) as User;
};

const getUser = createAsyncThunk(
  "users/getUser",
  async (userId: string, { rejectWithValue }) => {
    try {
      // console.log("args: ", userId);
      const response: User[] = await JSON.parse(JSON.stringify(users));
      // replace with fetch user get request
      console.log("response: ", response);
      return response.find(({ id }: User) => id === userId) as User;
    } catch (err) {
      rejectWithValue((err as Error).message);
    }
  }
);

const updateUser = createAsyncThunk(
  "users/updateInventoryItem",
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
  "users/addInventoryItem",
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
  "users/removeUser",
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser
  },
  extraReducers: {
    [getUser.pending.type]: (state) => {
      state.status = Status["PENDING"];
    },
    [getUser.fulfilled.type]: (
      state: UserProps,
      { payload }: PayloadAction<User>
    ) => {
      state.status = Status["FULFILLED"];
      state.user = payload;
    },
    [getUser.rejected.type]: (state, payload) => {
      state.status = Status["REJECTED"];
      state.error = payload.errorMessage;
    }
  }
});

export { clearUser, getUser, updateUser };

export default userSlice.reducer;
