import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { authToken } from 'class/authToken';

const KakaoLogin = () => {
  // const API_URL = process.env.REACT_APP_TASQUEUE_API_URL;
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code'); // 카카오 인가코드
  console.log(`카카오 인가 코드 : ${code}`);
  useEffect(() => {
    // 백엔드로 인가코드를 보낸다.
    axios.post(`/oauth/get`, { code }).then((res) => {
      console.log(res.headers.authorization);
      window.localStorage.setItem('userAccessToken', res.headers.authorization);
      authToken.setToken(res.headers.authorization);
      navigate('/home');
    });
  }, []);
  console.log(authToken.getToken());
  return <div>로그인 중입니다.</div>;
};

export default KakaoLogin;
