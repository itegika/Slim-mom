import { instance } from "./auth";

export async function postDay(options) {
  const { data } = await instance.post("/day", options);
  return data;
}

export async function postDayInfo(options) {
  const { data } = await instance.post("/day/info",options);
  return data;
}


// {
//   "date": "2020-12-31"
// }