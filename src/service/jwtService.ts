// decoding and verifying jwt token

import cacheService from "./cacheService";

export default {
  // store jwt token in local storage
  storeJwt(token: string): void {
    cacheService.storeLocal("jwt", token);
  },
  // fetch jwt token from local storage
  fetchJwt(): string {
    return cacheService.fetchLocal("jwt");
  },
  // clear jwt token from local storage
  clearJwt(): void {
    cacheService.storeLocal("jwt", "");
  },

  getProp(propName: string): string {
    const token = this.fetchJwt();

    // if token is empty return empty string
    if (Object.keys(token).length === 0) return "";

    // split token into parts => [header, payload, signature]
    const parts = token.split(".");

    // decode payload from base64 to string and convert it to JSON
    const payload = JSON.parse(atob(parts[1]));

    // return the value of the propName
    return payload[propName];
  },
};
