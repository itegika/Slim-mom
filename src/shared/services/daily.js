import { instance } from "./auth";

export const getDailyRate = async (options) => {
  return instance.post("/daily-rate", options);
};
