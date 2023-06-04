// For Login and Register

import { SigninAuthDetails, SignupAuthDetails } from "../model/AuthDetails";
import axios from "axios";
import jwtService from "./jwtService";

const BASE_AUTH_URL = "http://localhost:8080/auth";

export default {
  async register(authDetails: SignupAuthDetails) {
    // creating a token when user registers and storing it in local storage
    const res = await axios.post(BASE_AUTH_URL + "/register", authDetails);
    jwtService.storeJwt(res.data);
  },
  async login(authDetails: SigninAuthDetails) {
    // creating a token when user logs in and storing it in local storage
    const res = await axios.post(BASE_AUTH_URL + "/login", authDetails);
    jwtService.storeJwt(res.data);
  },
};
