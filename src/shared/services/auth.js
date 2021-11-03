import axios from "axios";

export const instance = axios.create({
  baseURL: "https://slimmom-backend.goit.global/",
});
export const token = {
  set(token) {
    instance.defaults.headers.common["Authorisation"] = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common["Authorisation"] = "";
  },
};

export async function onSignUp(credentials) {
  const { data } = await axios.post("/auth/register", credentials);
  return data;
}
export async function onLogIn(credentials) {
  const { data } = await axios.post("/auth/login", credentials);
  return data;
}

export async function onLogOut() {
  const { data } = await instance.post("auth/logout");
  return data;
}
