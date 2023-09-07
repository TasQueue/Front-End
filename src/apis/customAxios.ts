import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'https://taskq.co.kr', // 백엔드 서버 URL
  withCredentials: true,
});

export default customAxios;
