import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//Component Imports
import ShelfForm from '../ShelfForm/ShelfForm';
import ShelfList from '../ShelfList/ShelfList';



function ShelfPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_SHELF' });
}, []);
  return (
    
    <div className="container">
      <h1>Shelf</h1>
      <ShelfForm/>
      <ShelfList/>
      
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
