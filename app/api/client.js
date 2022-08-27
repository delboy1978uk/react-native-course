import { create } from 'apisauce';

const apiClient = create({
    // baseURL: 'http://192.168.0.204:9000/api'
    baseURL: 'http://172.20.10.2:9000/api'
});

export default apiClient;
