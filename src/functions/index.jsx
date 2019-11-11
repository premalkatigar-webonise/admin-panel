export function ADD_DETAILS(old_state,new_state){
    var _oldState = old_state;
    var usernames = Object.keys(_oldState);
    if (usernames.length > 0){
        return Object.assign(_oldState, new_state);
    }
    else{
        return new_state;
    }
}

export function UPDATE_DETAILS(state,change_state){
    state[change_state.user_name].subject = change_state.subject;
    state[change_state.user_name].score = change_state.score;
    return state;
}

export function DELETE_DETAILS(state, delete_state){
    delete state[delete_state.user_name];
    return state;
}
export function LOGIN (state,user_details){
    if(user_details.username === 'Admin' && user_details.password === 'Admin@123'){
        state.message = 'success';
        return state;
    }
    else{
        state.message = 'fail';
        return state;
    }
}
export function LOGOUT(state, user_details){
    if(state.hasOwnProperty('message') === true){
        state.message = '';
    }
    return state;
}