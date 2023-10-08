import axios from "axios";

const urlAPI = "https://jsonplaceholder.typicode.com/posts";
const postApi = {
    getPost: () => {
      return axios.get(`${urlAPI}`);
    },
    detailPost: (id) => {
    return axios.get(`${urlAPI}/${id}`);
    },
  };

export default postApi;