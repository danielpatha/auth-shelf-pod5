import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ShelfItem({ item }) {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    console.log('user id:',user.id)
    console.log('item.user_id',item.user_id)

    const deleteItem = (evt) => {
        console.log(evt.target.name)
        


        dispatch({
            type: 'DELETE_ITEM',
            payload: item
        });


    }


    return (

        <li key={item.id}>
            <p> {item.description}</p>
            <img src={item.image_url} />

            {user.id === item.user_id ? 
            <button name={item.id} onClick={deleteItem}> Delete </button>
                :
                <></>
                }
        </li>

    )
}

export default ShelfItem;