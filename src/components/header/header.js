import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Lorem Ipsum</h1>
        <h2 className={styles.subheading}>Is simply dummy text of the printing and typesetting industry</h2>
        <p className={styles.text}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <p className={styles.text}>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </header>
  );
}

export default Header;
