import axios from "axios";
import { useFetch } from './useFetch'
import { usePost } from './usePost'

//axios.defaults.baseURL = "https://contactsvc.bmaster.kro.kr/";
axios.defaults.baseURL = "http://localhost:3000/";

export { useFetch, usePost };
