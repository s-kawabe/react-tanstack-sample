import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

// https://cloud.google.com/apis/design/standard_methods
// TODO: returnがPromise<AxiosResponse<any>>のようになるのでanyを回避したい

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  resource: string,
  params?: Record<string, string>,
  headers?: Record<string, string>
) => {
  axiosClient.interceptors.request.use((config) => {
    if (params) config.headers = { ...headers };
    if (headers) config.params = { ...params };
    return config;
  });

  return {
    list() {
      return axiosClient.get(resource);
    },
    get(id: string) {
      return axiosClient.get(`${resource}/${id}`);
    },
    create(payload: unknown) {
      return axiosClient.post(resource, payload);
    },
    update(id: string, payload: unknown) {
      return axiosClient.put(`${resource}/${id}`, payload);
    },
    delete(id: string) {
      return axiosClient.delete(`${resource}/${id}`);
    },
  };
};
