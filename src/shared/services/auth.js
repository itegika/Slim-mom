import axios from "axios";

export const instance = axios.create({
  baseURL: "https://slimmom-backend.herokuapp.com/",
  headers: {
    Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTgyY2E3M2E2Zjk3NjY4ZjdmYzVjNGMiLCJzaWQiOiI2MTgzMDY5Mzc0MDQ0ZjAwMDQ4NTQ3NjkiLCJpYXQiOjE2MzU5NzY4NTEsImV4cCI6MTYzNTk4MDQ1MX0.p0cjXtoXV4woXuQ7M-v8y4qjKyvfKMHYatbyDdgYIBU`,
  },
});

export const token = {
  set(token) {
    // instance.headers.Authorization = `bearer ${token}`;
    // console.log(instance.defaults);
  },

  // unset() {
  //   instance.defaults.headers.common["Authorisation"] = "";
  // },
};
export async function onSignUp(credentials) {
  const { data } = await instance.post("/auth/register", credentials);
  return data;
}
export async function onLogIn(credentials) {
  const { data } = await instance.post("/auth/login", credentials);
  return data;
}
