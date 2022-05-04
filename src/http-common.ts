import axios from "axios";

const api = axios.create({
  baseURL: "https://help.10web.io/api/v2/help_center/articles",
});

export default api;