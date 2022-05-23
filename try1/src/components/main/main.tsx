import React, { useRef } from 'react';
import styles from './main.module.css';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  const moveToPath = (path: any) => {
    path === 'main' ? (path = 'logo') : (path = 'logo');
    navigate(`/${path}`);
  };
  const onClick = (event: any) => {
    moveToPath(event.target.outerText);
  };
  return (
    <div className={styles.container}>
      <button onClick={onClick} className={styles.main}>
        main
      </button>
    </div>
  );
};

export default Main;
