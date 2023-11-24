import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Homepage/homepage';
import Quickstart from './Game/quick-start';
import { HashRouter as Router } from 'react-router-dom';
const AppRoutes = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/quick-start" Component={Quickstart} />
        </Routes>
        </Router>
    );
};

export default AppRoutes;
