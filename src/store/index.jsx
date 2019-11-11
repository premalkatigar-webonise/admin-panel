import React from 'react';
import RouterComponent from '../router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import StoreReducer from '../reducer';

const store = createStore(StoreReducer);
function App(){
    return (
        <Provider store = {store}>
            <RouterComponent />
        </Provider>
    )
}

export default App;