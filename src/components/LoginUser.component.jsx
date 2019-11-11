import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import {connect} from 'react-redux';
import * as ACTION from '../actions';
import {Redirect} from 'react-router-dom';
//import AddUserComponent from './AddUser.component';

class LoginUserComponent extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    handleClick = () => {
        var obj = {username:this.refs.username.value , password:this.refs.password.value};
        this.props.dispatch({type:ACTION.LOGIN, data:obj});
        console.log(this.props.state.message);
    }
    render(){
        return(
            <div>
                {this.props.state.message === 'success' ? <Redirect to='/AddUser' /> : <div className="container"><div className="card" style={{ width: '18rem', margin: '0 auto', 'marginTop':'10%' }}>
                    <div className="card-body">
                        <Form>
                            <Form.Group>
                                <Form.Label className="textbox">User Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter User Name" className="textbox" ref="username"></Form.Control>
                                <Form.Label className="textbox">Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" className="textbox" ref="password"></Form.Control><br />
                                <Button variant="primary" className="button" onClick={this.handleClick}>Login</Button>
                            </Form.Group>
                        </Form>
                    </div>
                </div>
                </div>}
                <div className="card" style={{ width: '18rem',margin: '0 auto'}}>
                    <Alert variant = "success">
                        <Form.Label>User Name : Admin</Form.Label>
                        <Form.Label>Password  : Admin@123</Form.Label>
                    </Alert>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {state};
}
export default connect(mapStateToProps)(LoginUserComponent);