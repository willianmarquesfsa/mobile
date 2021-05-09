import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.108:3000'// 'http://192.168.0.102:3000' //'http://classificasdosfsa-com.umbler.net/'
}); 

//http://classificasdosfsa-com.umbler.net/
export default api;

