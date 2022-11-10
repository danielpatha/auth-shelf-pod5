import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function ShelfForm(){
    return (
        <>
        <h1>Shelf Form</h1>
        <form>
        <h2> Add an Item </h2>
        <label htmlFor="description">
            Description:
        <input
            type="text"
            required
            name = "description"
          />
        </label>

        <label htmlFor="url">
            Image URL:
        <input
            type="text"
            required
            name = "url"
          />
        </label>
        <button>Add Item</button>
        </form>
        


        </>
    )
}

export default ShelfForm;