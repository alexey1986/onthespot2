import React from "react";
import styles from './sidebar.module.css';
import Dropdown from './../dropdown/dropdown'

function Sidebar() {
  const options = [
    { label: "Is simply", value: "is simply" },
    { label: "Dummy text", value: "dummy text" },
    { label: "Of the printing", value: "of the printing" },
    { label: "And typesetting industry", value: "and typesetting industry" }
  ];
  
  return (
    <aside className={styles.aside}>
      <div className={styles.form}>
        <h2 className={styles.heading}>Lorem Ipsum</h2>
        <Dropdown options={options} selected={options[0]} />
        <Dropdown options={options} selected={options[1]} />
        <Dropdown options={options} selected={options[2]} />
        <Dropdown options={options} selected={options[3]} />
      </div>
    </aside>
  );
}

export default Sidebar;
