import { instance } from "./auth";

export const getDailyRate = async (options) => {
  return instance.post("/daily-rate", options);
};

export const getDailyRateById = async (options, id) => {
  return instance.post(`/daily-rate/${id}`, options);
};
