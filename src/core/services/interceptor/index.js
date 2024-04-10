import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL,
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (err) => {
  if (err.response.status >= 400 && err.response.status < 500) {
    alert("Client Error:" + err.response.status);
  }
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;
