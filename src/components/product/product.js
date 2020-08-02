import React from 'react';
import Button from './../button/Button';
import styles from './product.module.css';
import {ReactComponent as ReactIcon} from './icon.svg';

function Product() {
  return (
    <div className={styles.item}>
        <div className={styles.image}></div>
        <div className={styles.details}>
          <h4 className={styles.name}>Is simply</h4>
          <dl className={styles.description}>
            <dt>Is simply: </dt>
            <dd>Lorem Ipsum</dd>
            <dt>dummy: </dt>
            <dd>has been the industry's</dd>
            <dt>text: </dt>
            <dd>Is simply</dd>
          </dl>
        </div>
        <div className={styles.price}>999$</div>
        <div className={styles.action}>
          <Button>BUY</Button>
          <Button type="transparent">
            <ReactIcon className={styles.icon} />
            <div className={styles.tooltip}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</div>           
          </Button>
        </div>
    </div>
  );
}

export default Product;
