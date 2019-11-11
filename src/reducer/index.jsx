import * as ACTION from '../actions';
import {ADD_DETAILS,UPDATE_DETAILS,DELETE_DETAILS} from '../functions';
const StoreReducer = (state = {message:''}, action) => {
    switch(action.type){
        case ACTION.ADD_DATA:
            let insert_values = ADD_DETAILS(state, action.data);
            return insert_values;
        case ACTION.UPDATE_DATA:
            let update_values = UPDATE_DETAILS(state, action.data);
            return update_values;
        case ACTION.DELETE_DATA:
            let delete_values = DELETE_DETAILS(state, action.data);
            return delete_values;
        case ACTION.LOGIN:
            let login_details = action.data;
            if(login_details.username === 'Admin' && login_details.password === 'Admin@123'){
                state.message = 'success';
            }
            return {...state};
        case ACTION.LOGOUT:
            state.message = '';
            console.log(state);
            return {...state};
        default:
        return state;
    }
}
export default StoreReducer;