import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';







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


function* shelfSaga() {
    yield takeEvery('FETCH_SHELF', fetchShelf);

};

//export shelf saga
export default shelfSaga;