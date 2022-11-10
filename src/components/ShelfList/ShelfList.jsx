import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';

function ShelfList(){
   const dispatch = useDispatch();
    const shelf = useSelector(store => store.shelfReducer);

    useEffect(() => {
        dispatch({ type: 'FETCH_SHELF' });
    }, []);
    return (
        <>
        <h1>Shelf List</h1>

        <ShelfItem/>

        </>
    )
}

export default ShelfList;