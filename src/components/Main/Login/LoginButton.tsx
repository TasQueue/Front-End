const LoginButton = () => {
  // REST API 방식
  const REST_API_KEY = '백엔드한테 요청1';
  const REDIRECT_URI = '백엔드한테 요청2';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handleKakaoLogin = () => {
    // Kakao.Auth.authorize({
    //   redirectUri: 'https://developers.kakao.com/tool/demo/oauth',
    // });
    window.location.href = link;
  };

  return (
    <button type='button' onClick={handleKakaoLogin}>
      <img src='/assets/images/kakao_login_medium_narrow.png' alt='카카오 로그인' />
    </button>
  );
};
export default LoginButton;
