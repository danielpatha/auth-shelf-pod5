import React from 'react';
import { useSelector } from 'react-redux';
import ShelfItem from '../ShelfItem/ShelfItem';

function ShelfList(){
const shelf = useSelector(store => store.shelfReducer);


    return (
        <main>
        <h2>Shelf List</h2>

      <section>
        <ul>
        {shelf.map(item => {
            return(
                <ShelfItem item = {item}/>
            )

        })}
        </ul>

      </section>

        

       
        </main>
    )
}

export default ShelfList;