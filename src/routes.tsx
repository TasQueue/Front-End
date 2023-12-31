import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import FollowManage from './pages/FollowManagePage/FollowPage';
import Setting from './pages/SettingPage/SettingPage';
import KakaoLogin from './pages/Main/KakaoLogin';
import Main from './pages/Main/Main';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/home' Component={Home} />
        <Route path='/followManage' Component={FollowManage} />
        <Route path='/setting' Component={Setting} />
        <Route path='/login/oauth2/code/kakao' Component={KakaoLogin} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
