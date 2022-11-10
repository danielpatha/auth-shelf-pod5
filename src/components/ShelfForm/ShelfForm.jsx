import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ShelfForm(){

    //setup dispatch
    const dispatch = useDispatch();

    //set local state for input fields
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');

    //import user info from redux store
    const user = useSelector(store => store.user);
    console.log('user id is', user.id);

    //postItem function
    const postItem = (evt) => {
        //prevent default
        evt.preventDefault();
        console.log('in postItem with two values:', description, url);

        dispatch({
            type: 'ADD_ITEM',
            payload: {description: description, image_url:url},
        });
        setDescription('');
        setUrl('');
    }


    return (
        <>
        <h2>Shelf Form</h2>
        <form onSubmit={postItem}>
            <label htmlFor="description">
                Description:
            <input
                type="text"
                required
                name = "description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            </label>

            <label htmlFor="url">
                Image URL:
            <input
                type="text"
                required
                name = "url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />
            </label>
            <button type="submit">Add Item</button>
        </form>
        


        </>
    )
}

export default ShelfForm;