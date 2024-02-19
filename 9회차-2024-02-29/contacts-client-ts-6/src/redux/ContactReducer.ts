import { createReducer } from "@reduxjs/toolkit";
import { ContactStateType, actionSearchContacts } from "./ContactAction";

const initialState: ContactStateType = {
  contacts: [],
  isLoading: false,
  status: ""
};

const ContactReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actionSearchContacts.pending, (state, action) => {
      state.isLoading = true;
      state.status = action.meta.arg.name + " 포함 이름으로 조회중";
    })
    .addCase(actionSearchContacts.fulfilled, (state, action) => {
      state.contacts = action.payload.contacts;
      state.isLoading = false;
      state.status = "조회 완료";
    })
    .addCase(actionSearchContacts.rejected, (state) => {
      state.contacts = [];
      state.isLoading = false;
      state.status = "조회 실패";
    });
});

export default ContactReducer;
