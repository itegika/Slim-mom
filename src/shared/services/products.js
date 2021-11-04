import { instance } from "./auth";

export async function getProducts(query) {
  const { data } = await instance.get(`/product?search=${query}`);
  return data;
}