import React from 'react';
import styles from './Header.module.css';

function Header(){
  
  return (
    <>
    <h1 className={styles.navbar}>Muskutty Ambulance</h1>
    <p>New case</p>
    </>
  )
}

export default Header;