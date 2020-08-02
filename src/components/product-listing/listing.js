import React from 'react';
import Product from './../product/product';
import styles from './listing.module.css';

function Listing() {
  return (
    <ul className={styles.products}>
        {[...Array(8)].map((x, i) =>
            <Product key={i} />
        )}
    </ul>
  );
}

export default Listing;
