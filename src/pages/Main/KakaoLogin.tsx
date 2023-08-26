import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import * as process from 'process';
import { UserAccessToken } from '../../recoil/user/atom';

const KakaoLogin = () => {
  const API_URL = process.env.REACT_APP_TASQUEUE_API_URL;
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get('code'); // 카카오 인가코드
  const setAccessToken = useSetRecoilState(UserAccessToken);

  useEffect(() => {
    // 백엔드로 인가코드를 보낸다.
    axios.post(`${API_URL}/oauth/get`, { code }).then((res) => {
      console.log(res.headers.authorization);
      setAccessToken({
        accessToken: res.headers.authorization,
      });
      navigate('/home');
    });
  }, []);

  return <div>로그인 중입니다.</div>;
};

export default KakaoLogin;
