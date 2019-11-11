import React from 'react';
import {BrowserRouter, Link, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddUserComponent from '../components/AddUser.component';
import UsersComponent from '../components/Users.component';
import LoginUserComponent from '../components/LoginUser.component';
import Logout from '../components/Logout.component';
import {connect} from 'react-redux';

class RouterComponent extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Redirect to='Login' />
                {this.props.state.message === 'success' ? <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/AddUser" className="nav-link">Add User</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/Users" className="nav-link">Users</Link>
                                </li>
                                <li className="navbar-item">
                                    <Link to="/Logout" className="nav-link">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div> : null}
                <Route path="/Users" component={UsersComponent} />
                <Route path="/AddUser" component={AddUserComponent} />
                <Route path="/Login" component={LoginUserComponent} />
                <Route path="/Logout" component={Logout} />
            </BrowserRouter>
        )
    }
}
function mapStateToProps(state){
    return {state};
}
export default connect(mapStateToProps)(RouterComponent);