

const shelfReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_LIST':
            return action.payload;
    }

    return;
}


export default shelfReducer;