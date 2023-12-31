import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk string can be literally anything. Just a named string the Thunk uses
const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get("http://localhost:3005/users");

  //   Dev mode only
  await pause(5000);

  return res.data;
});

// Dev mode only
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUsers };
