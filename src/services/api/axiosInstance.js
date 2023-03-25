import axios from 'axios';
const axiosInstance = axios.create();
function createAxiosResponseInterceptor(axiosInstances) {
  return axiosInstances
}

export default createAxiosResponseInterceptor(axiosInstance);
