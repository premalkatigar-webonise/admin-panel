import React from 'react';
import {connect} from 'react-redux';
import {Table,Button,Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';
import * as ACTION from '../actions';
import {Redirect} from 'react-router-dom';

class UsersComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {open:false, values:[],status:''};
    }
    handleEvent = (e,status) => {
        let user_name = document.getElementById('username').value;
        let subject = document.getElementById('subject').value;
        let score = document.getElementById('score').value;
        let obj = {user_name:user_name,subject:subject, score:score};
        if(status === 'Update'){
            this.props.dispatch({type:ACTION.UPDATE_DATA, data:obj});
        }
        else{
            this.props.dispatch({type:ACTION.DELETE_DATA, data:obj});
        }
        this.setState({open:false});
    }
    open = (e,name,subject,score,status) => {
        e.preventDefault();
        let arr = [name,subject,score];
        this.setState({open:true,values:arr,status:status});
    };
    close = () =>{ this.setState({open:false})};
    render(){
        return(
            <div>
                {this.props.state.message === 'success' ? <div className="container">
                    {Object.keys(this.props.state).length ?
                        <Modal isOpen={this.state.open}>
                            <ModalHeader>Update User</ModalHeader>
                            <ModalBody>
                                <Label>User Name</Label>
                                <Input type='text' id='username' defaultValue={this.state.values[0]} disabled />
                                <Label>Subject</Label>
                                <Input type='text' id='subject' defaultValue={this.state.values[1]} />
                                <Label>Score</Label>
                                <Input type='text' id='score' defaultValue={this.state.values[2]} />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={e => this.handleEvent(e, this.state.status)}>{this.state.status}</Button>{' '}
                                <Button color="secondary" onClick={this.close}>Cancel</Button>
                            </ModalFooter>
                        </Modal> : null}
                    <Table striped>
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Subject</th>
                                <th>Score</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(this.props.state).map((value, key) => {
                                if(value !== 'message'){
                                    return <tr key={key}>
                                        <td>{value}</td>
                                        <td>{this.props.state[value].subject}</td>
                                        <td>{this.props.state[value].score}</td>
                                        <td><Button color='primary' id='update' onClick={e => { this.open(e, value, this.props.state[value].subject, this.props.state[value].score, 'Update') }}>Update</Button></td>
                                        <td><Button color='danger' id='delete' onClick={e => { this.open(e, value, this.props.state[value].subject, this.props.state[value].score, 'Delete') }}>Delete</Button></td>
                                    </tr>
                                }
                                else{
                                    return null;
                                }
                            })
                            }
                        </tbody>
                    </Table>
                </div> : <Redirect to ='/login' />}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {state};
}

export default connect(mapStateToProps)(UsersComponent);