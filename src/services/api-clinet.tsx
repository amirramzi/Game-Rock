import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e148d181058b42ccaa500b39bb71b68f",
  },
});
