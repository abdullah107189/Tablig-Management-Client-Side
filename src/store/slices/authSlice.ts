/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice} from "@reduxjs/toolkit";
import {loginThunk, registerThunk, meThunk, logoutThunk} from "./authThunks";

type User = {
  id: string;
  name: string;
  email: string;
  mosqueRole?: "admin" | "editor" | "viewer" | null;
};

type AuthState = {
  user: User | null;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (b) => {
    b.addCase(loginThunk.pending, (s) => { s.status = "loading"; s.error = null; });
    b.addCase(loginThunk.fulfilled, (s, a:any) => { s.status = "success"; s.user = a.payload?.user ?? null; });
    b.addCase(loginThunk.rejected, (s, a:any) => { s.status = "error"; s.error = a.payload ?? "Login failed"; });

    b.addCase(registerThunk.pending, (s) => { s.status = "loading"; s.error = null; });
    b.addCase(registerThunk.fulfilled, (s, a:any) => { s.status = "success"; s.user = a.payload?.user ?? null; });
    b.addCase(registerThunk.rejected, (s, a:any) => { s.status = "error"; s.error = a.payload ?? "Register failed"; });

    b.addCase(meThunk.fulfilled, (s, a:any) => { s.user = a.payload?.user ?? null; });
    b.addCase(meThunk.rejected, (s) => { s.user = null; });

    b.addCase(logoutThunk.fulfilled, (s) => { s.user = null; s.status = "idle"; s.error = null; });
  }
});

export default authSlice.reducer;
