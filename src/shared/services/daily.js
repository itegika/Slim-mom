import axios from "axios";

const instance = axios.create({
  baseURL: "https://slimmom-backend.goit.global/daily-rate/",
});

export const getDailyRate = async ({ params }) => {
  return instance.post("/daily-rate", { params });
};
