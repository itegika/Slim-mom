import axios from "axios";

export const instance = axios.create({
  baseURL: "https://slimmom-backend.herokuapp.com/",
  // headers: {
  //   Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTgyY2E3M2E2Zjk3NjY4ZjdmYzVjNGMiLCJzaWQiOiI2MTgzOTM3ZDc3NTBhODAwMDQwMGFhMmMiLCJpYXQiOjE2MzYwMTI5MjUsImV4cCI6MTYzNjAxNjUyNX0.0tJ8Apz3YaXibAAjhsr71UW7G3Kj0OHa9ePL9vvppFU`,
  // },
});

export const token = {
  set(token) {
    instance.defaults.headers.authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common["Authorisation"] = "";
  },
};
export async function onSignUp(credentials) {
  const { data } = await instance.post("/auth/register", credentials);
  return data;
}
export async function onLogIn(credentials) {
  const { data } = await instance.post("/auth/login", credentials);
  return data;
}

export async function onLogOut() {
  const { data } = await instance.post("/auth/logout");
  return data;
}
export async function CheckedCurrentUser() {
  const { data } = await instance.get("/user");
  return data;
}
