import React from 'react';
import {connect} from 'react-redux';
import * as ACTION from '../actions';
import {Redirect} from 'react-router-dom';
class Logout extends React.Component {
    UNSAFE_componentWillMount(){
        this.props.dispatch({type:ACTION.LOGOUT, data:''})
    }
    render(){
        return(
            <div>
                {this.props.state.message === '' ? <Redirect to='/login' /> : null}
            </div>
        )
    }
}
function mapStateToProps(state){
    return {state};
}
export default connect(mapStateToProps)(Logout);
