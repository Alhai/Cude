import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Homepage/homepage';
import Quickstart from './Game/quick-start';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" Component={HomePage} />
            <Route path="/quick-start" Component={Quickstart} />
        </Routes>
    );
};

export default AppRoutes;
