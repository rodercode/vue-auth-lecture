// For Login and Register

import { SigninAuthDetails, SignupAuthDetails } from "../model/AuthDetails";
import axios from "axios";
import jwtService from "./jwtService";

const BASE_AUTH_URL = 'http://localhost:8080/auth';

export default {
  async register(authDetails: SignupAuthDetails) {
    const res = await axios.post(BASE_AUTH_URL + "/register", authDetails);
    jwtService.storeJwt(res.data);
  },
  async login(authDetails: SigninAuthDetails) {
    const res = await axios.post(BASE_AUTH_URL + "/login", authDetails);
    jwtService.storeJwt(res.data);
  },
};
