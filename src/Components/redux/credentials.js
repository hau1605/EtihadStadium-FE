import { createSlice } from "@reduxjs/toolkit";

const credentials = createSlice({
  name: "credentials",
  initialState: {
    accessToken: null,
    role: null,
  },
  reducers: {
    login: (state, action) => {
      return {
        ...state,
        accessToken: action.payload["accessToken"],
        role: action.payload["role"],
      };
    },
    logout: (state, action) => {
      return {
        ...state,
        accessToken: null,
        role: null,
      };
    },
  },
});

export const credentialsReducer = credentials.reducer;
export const { login, logout } = credentials.actions;