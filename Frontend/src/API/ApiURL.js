import axios from "axios";
import { ServiceURL } from "./ServiceURl";
// import ServiceURL from "../ServiceURL"; // adjust path if needed

export const Email = (data) => {
  return axios({
    method: "POST",
    url: `${ServiceURL.API_URL}/email/send-email`,
    data: data,
  });
};