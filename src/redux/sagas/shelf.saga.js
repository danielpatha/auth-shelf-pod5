import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';







//fetch shelf with get request
function* fetchShelf(){
    console.log('in fetchShelf SAGA');

    // get shelf from server via axios
    try{
        const shelf = yield axios.get('/api/shelf');

        //send to redux
        yield put({
            type: 'SET_SHELF',
            payload: shelf.data
        });

    } catch (err){
        //on error
        console.error('in fetchShelf SAGA error:', err);
    };
}

//ADD to shelf fn*
                //action.payload is the item object to go to the server
function* addItem(action){
    console.log('in addItemSaga with the item of:', action.payload);
    try{
        //send new item to server then to DB at server
        yield axios.post('/api/shelf', action.payload);

        //reset redux and rerender after store is updated
        yield put({
            type: 'FETCH_SHELF',
        });

    } catch (err) {
        console.error('in addItem SAGA error:', err);
    }
}

function* deleteItem(action){
    console.log('in deleteItemSaga with the item id of:', action.payload);
    try{
        //send item id via params to the server for the delete route
        yield axios.delete(`/api/shelf/${action.payload}`, {
            data: action.payload
        });

        //reset redux and rerender after store is updated
        yield put({
            type: 'FETCH_SHELF',
        });

    } catch (err) {
        console.error('in addItem SAGA error:', err);
    }
}


function* shelfSaga() {
    //fetch the shelf from the server and send to redux at fetchShelf fn*
    yield takeEvery('FETCH_SHELF', fetchShelf);

    //add to the shelf using saga fn*
    yield takeEvery('ADD_ITEM', addItem);

    //delete from the shelf using saga fn*
    yield takeEvery('DELETE_ITEM', deleteItem);

};

//export shelf saga
export default shelfSaga;