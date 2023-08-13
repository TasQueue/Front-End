import * as process from 'process';

const LoginButton = () => {
  // REST API 방식
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    window.location.href = link;
  };

  return (
    <button type='button' onClick={handleKakaoLogin}>
      <img src='/assets/images/kakao_login_medium_narrow.png' alt='카카오 로그인' />
    </button>
  );
};
export default LoginButton;
