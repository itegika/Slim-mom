import { instance } from "./auth";

export async function postDay(options) {
  console.log(instance.defaults.headers.authorization);
  const { data } = await instance.post("/day", options);
  return data;
}
