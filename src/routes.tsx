import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Setting from './pages/setting/SettingPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/setting' Component={Setting} />
      </Routes>
    </Router>
  );
};
export default AppRouter;
