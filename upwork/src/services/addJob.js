import axios from "axios";
import { basedUrl } from "./basedUrl";
export const addJobService = (job) => {
  return axios.post(`${basedUrl}/jobs/add-job`, job,{
    headers: {
      'Content-Type': "application/json "
    }})
};
