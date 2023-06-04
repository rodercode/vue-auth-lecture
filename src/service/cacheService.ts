// Store and retrieve data from localStorage

export default {
  storeLocal(ref: string, data: any): void {
    // remains after closed browser
    localStorage.setItem(ref, JSON.stringify(data));
  },
  storeSession(ref: string, data: any): void {
    // cleared after closed browser
    sessionStorage.setItem(ref, JSON.stringify(data));
  },
  fetchLocal<Type>(ref: string): Type {
    const item = localStorage.getItem(ref) || "{}";
    return JSON.parse(item);
  },
  fetchSession<Type>(ref: string): Type {
    const item = sessionStorage.getItem(ref) || "{}";
    return JSON.parse(item);
  },
};
