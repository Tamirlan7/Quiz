import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import router from './router/router';

export default function App () {

    return (
        <div className="App">
            <Routes>
                {router.map(route => <Route path={route.path} element={route.element} />)}
            </Routes>
        </div>
    );
};