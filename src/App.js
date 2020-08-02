import React from 'react';
import Header from './components/header/header';
import Listing from './components/product-listing/listing';
import Sidebar from './components/sidebar/sidebar';
import './index.css';

function App() {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <Listing />
    </div>
  );
}

export default App;
