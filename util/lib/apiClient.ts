import axios from "axios";

const apiClient = axios.create({
  baseURL: `https://api.notion.com/v1/databases/87b0b46d6ff444698b42141dce95f261/query`,
  headers: {
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS,PATCH",
    Accept: "application/json",
    "Notion-Version": "2022-06-28",
    "Content-type": "application/json",
    Authorization: `Bearer secret_k2edkOQbgkx6fHJFzJKPb7ap8brVz0NdYdmE6tvz6aq`,
  },
});
export default apiClient;
