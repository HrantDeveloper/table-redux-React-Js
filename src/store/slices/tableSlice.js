import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
  table: [],
  titles:['id','name','username','email','address','phone','website','company'],
};

export const tableSlice = createSlice({
  name: "tableSlice",
  initialState,
  reducers: {
    sortUsersUp(state, { payload }) {
      state.table = state.table.sort((a, b) => {
        if (a[payload] < b[payload]) return -1;
        else if (a[payload] > b[payload]) return 1;
        else return 0;
      });
    },
    sortUsersDown(state, { payload }) {
      state.table = state.table.sort((a, b) => {
        if (a[payload] > b[payload]) return -1;
        else if (a[payload] < b[payload]) return 1;
        else return 0;
      });
    },
    fillTableData(state, { payload }) {
      state.table = payload;
    },
  },
});
export const { sortUsersUp,sortUsersDown, fillTableData } = tableSlice.actions;
