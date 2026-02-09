/* eslint-disable @typescript-eslint/no-explicit-any */
import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "@/lib/axios";

type LoginPayload = { email: string; password: string };
type RegisterPayload = { name: string; email: string; password: string; phone?: string };

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (payload: LoginPayload, {rejectWithValue}) => {
    try {
      const res = await api.post("/auth/login", payload);
      return res.data; // expected: { user: {...} }
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message || "Login failed");
    }
  }
);

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (payload: RegisterPayload, {rejectWithValue}) => {
    try {
      const res = await api.post("/auth/register", payload);
      return res.data; // expected: { user: {...} }
    } catch (e: any) {
      return rejectWithValue(e?.response?.data?.message || "Register failed");
    }
  }
);

export const meThunk = createAsyncThunk(
  "auth/me",
  async (_, {rejectWithValue}) => {
    try {
      const res = await api.get("/auth/me");
      return res.data; // expected: { user: {...} }
    } catch (e: any) {
      return rejectWithValue("Unauthenticated");
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async () => {
    await api.post("/auth/logout");
    return true;
  }
);
