import axios from "axios";

const axiosInstance = axios.create({
  baseURL: defaultInstanceUri + "/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

const changeInstanceUrl = (url: string) => {
  axiosInstance.defaults.baseURL = url;
};

const request = async (path: string, body: any) => {
  let resBody = undefined;

  if (!body) {
    await axiosInstance
      .get(path)
      .then((response) => {
        if (response.data) {
          resBody = response.data;
        }
      })
      .catch((err) => {});
  } else {
    await axiosInstance
      .post(path, body)
      .then((response) => {
        if (response.data) {
          resBody = response.data;
        }
      })
      .catch((err) => {});
  }

  return resBody;
};

export { changeInstanceUrl , request};
