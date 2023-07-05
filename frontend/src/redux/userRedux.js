import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    errorMsg: "",
    showMsg: false,
    success: false
  },
  reducers: {
    setMsg: (state, action) => {
        state.errorMsg = action.payload;
        state.showMsg = true
    },
    resetMsg: (state) => {
        state.errorMsg = "";
        state.showMsg = false
    },
    logout: (state) => {
      state.currentUser = null;
      state.error = false;
    },
    setSuccess: (state) => {
        state.success = true
    },
  },
});

export const { setMsg, resetMsg, setSuccess, logout } = userSlice.actions;
export default userSlice.reducer;

