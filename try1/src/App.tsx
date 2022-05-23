import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import styles from './app.module.css';
import Main from 'components/main/main';
import Logo from 'components/logo/logo';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/logo' element={<Logo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
