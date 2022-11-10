import React from 'react';

//Component Imports
import ShelfForm from '../ShelfForm/ShelfForm';
import ShelfList from '../ShelfList/ShelfList';



function ShelfPage() {
  return (
    
    <div className="container">
      <h2>Shelf</h2>
      <ShelfForm/>
      <ShelfList/>
      
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
