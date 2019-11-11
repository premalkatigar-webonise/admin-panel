import React from 'react';
import {connect} from 'react-redux';
import * as ACTION from '../actions';
import {Redirect} from 'react-router-dom';
class AddUserComponent extends React.Component{
    onSubmit = (e) =>{ 
        e.preventDefault();
        let user_name = this.refs.user_name.value;
        let subject   = this.refs.subject.value;
        let score     = this.refs.score.value;
        var obj = {[user_name]:{subject:subject, score:score}};
        this.props.dispatch({type:ACTION.ADD_DATA, data:obj});
    }
    render(){
        return(
            <div>
                {this.props.state.message === 'success' ? <div className="container" style={{ marginTop: 10 }}>
                    <h3>Add New User</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>User Name:</label>
                            <input type="text"
                                className="form-control"
                                ref="user_name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Subject:</label>
                            <input type="text"
                                className="form-control"
                                ref="subject"
                            />
                        </div>
                        <div className="form-group">
                            <label>Score:</label>
                            <input type="text"
                                className="form-control"
                                ref="score"
                            />
                        </div>
                        <div className="form-group">
                            <input type="submit"
                                className="btn btn-primary"
                                value="Submit"
                            />
                        </div>
                    </form>
                </div> : <Redirect to='/login' />}
            </div>
        )
    }
}

function mapDispatchToProps(state){
    return {state};
}
export default connect(mapDispatchToProps)(AddUserComponent);