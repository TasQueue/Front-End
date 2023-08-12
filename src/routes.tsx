import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import FollowManage from './pages/FollowManagePage/FollowPage';
import Setting from './pages/SettingPage/SettingPage';
import KakaoLogin from './pages/Main/KakaoLogin';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/followManage' Component={FollowManage} />
        <Route path='/setting' Component={Setting} />
        {/* TODO /auth 수정할 것 */}
        <Route path='/auth' Component={KakaoLogin} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
