import { Dispatch, ThunkDispatch, UnknownAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

//향후 타입 이동으로 변경할 수 있음
export type AppDispatch = 
  ThunkDispatch<ContactStateType, undefined, UnknownAction> 
  & Dispatch<UnknownAction>

//백엔드에서 타입이 결정되고 상태의 contacts 속성 초기화가 되지 않았기 때문에 Utility Type을 이용할 수 없음
//백엔드 API의 응답결과를 확인하고 직접 타입을 선언함
export type ContactItemType = {
  no:string; name:string; tel:string; address:string; photo:string;
}

export type ContactStateType = {
  contacts: ContactItemType[];
  isLoading: boolean;
  status: string;
}

type ThunkErrorType = {
  message: string
}

export const actionSearchContacts = createAsyncThunk<
  { contacts: ContactItemType[] },
  { name: string },
  {
    dispatch: AppDispatch,
    state: ContactStateType,
    rejectValue: ThunkErrorType,
  }
>(
  "searchContacts",
  async ({ name }, thunkAPI) => {
    try {
      let url = "https://contactsvc.bmaster.kro.kr/contacts_long/search/" + name;
      const response = await axios.get(url);
      return { contacts : response.data };
    } catch(err) {
      return thunkAPI.rejectWithValue({ message: (err as unknown as AxiosError).message })
    }
  }
);