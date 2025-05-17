import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import HomePage from './pages/home/HomePage';
import ErrorPage from './pages/error/ErrorPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default App;
