import axios from "axios";
import { localBackend } from "./basedUrl";
export const addJobService = (job) => {
  return axios.post(`${localBackend}/jobs/add-job`, job,{
    headers: {
      'Content-Type': "application/json",
      "Authorization":`Bearer ${localStorage.getItem("token")}`
    }})
};
