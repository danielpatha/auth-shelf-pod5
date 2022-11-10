import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ShelfItem({item}){

    const deleteItem = (evt) => {
console.log(evt.target.name)
    }


    return (
        
            <li key = {item.id}> 
            <p> {item.description}</p> 
            <img src = {item.image_url}/> 

            <button name = {item.id} onClick = {deleteItem}> Delete </button>
            </li>   
      
    )
}

export default ShelfItem;