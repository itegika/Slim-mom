import { instance } from "./auth";

export async function getProducts() {
  //   console.log(instance.defaults.headers.authorization);
  const { data } = await instance.get("/products");
  return data;
}
