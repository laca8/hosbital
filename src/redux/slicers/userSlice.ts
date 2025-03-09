import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/userService";
import { objectId, user } from "../../type";
type obj = user & objectId;
const userStorage = JSON.parse(localStorage.getItem("user") || "null");
interface UserState {
  user: obj | null;
  loading: boolean;
  error: string | null;
  success: boolean;
}

const initialState: UserState = {
  user: userStorage ? userStorage : null,
  loading: false,
  error: null as string | null,
  success: false,
};
//create action
export const cretaeUser = createAsyncThunk(
  "cretaeUser",
  async (user: user, api) => {
    try {
      return await authService.createUser(user);
    } catch (error) {
      return api.rejectWithValue(
        (error as { response: { data: { message: string } } })?.response?.data
          ?.message
      );
    }
  }
);
export const loginUser = createAsyncThunk(
  "loginUser",
  async (user: user, api) => {
    try {
      return await authService.loginUser(user);
    } catch (error) {
      return api.rejectWithValue(
        (error as { response: { data: { message: string } } })?.response?.data
          ?.message
      );
    }
  }
);
export const logout = createAsyncThunk("logout", async () => {
  return await authService.logout();
});

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(cretaeUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(cretaeUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      })
      .addCase(cretaeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload as obj;
        state.success = true;
        state.error = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = { ...action.payload } as obj;
        state.success = true;
        state.error = null;
      });
  },
});
export default userSlice.reducer;
