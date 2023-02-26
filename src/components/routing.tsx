import React from 'react';
import { Navigate, Route } from 'react-router';
import { Routes } from 'react-router-dom';
import { privateroutess } from './route';

const Routing = () => {
    return (
        <Routes>
        {privateroutess.map((route, index) => <Route key = {index} path = {route.path} element={<route.element />}/>
            )}
        <Route path = "*" element = {<Navigate to = "/home" replace/>}/>
        </Routes>
    );
};

export default Routing;