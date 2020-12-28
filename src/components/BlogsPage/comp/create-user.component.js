import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import creatUserImg from './createUser.png';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    onSubmitHandler = (e) => {
        e.preventDefault();

        const user = {
            username: this.state.username,
        };
        console.log(user);

        axios
            .post(`${process.env.REACT_APP_BASE_URL}/users/add`, user)
            .then((res) => console.log(res.data));

        this.setState({
            username: '',
        });
    };
    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <Row
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0',
                    }}
                >
                    <Col
                        md={7}
                        style={{
                            padding: '0%',
                            margin: '0%',
                        }}
                    >
                        <img src={creatUserImg} alt="creatUserImg" style={{ width: '50vw' }}></img>
                    </Col>
                    <Col md={4}>
                        {' '}
                        <form onSubmit={this.onSubmitHandler}>
                            <div className="form-group">
                                <label style={{ fontSize: 'xx-large' }}>
                                    Username:{' '}
                                </label>
                                <input
                                    type="text"
                                    required
                                    name="username"
                                    className="form-control"
                                    value={this.state.username}
                                    onChange={this.onChangeHandler}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    value="Create User"
                                    className="btn btn-primary"
                                />
                            </div>
                        </form>
                    </Col>
                </Row>
            </div>
        );
    }
}
