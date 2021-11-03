import { instance } from "./auth";

export async function postDay(options) {
  const { data } = await instance.post("/day", options);
  return data;
}


