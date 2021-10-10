import React from 'react'
import { Input, Icon, Layout, Typography, Form, Button } from 'antd';
import API from './Api.js';
const { Content } = Layout;
const { Title } = Typography;

const INITIAL_STATE = {
    username: "username",
    password: "password"
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const data = { "username": this.state.username, "password": this.state.password }

        API.login(data).then((response) => {
            localStorage.setItem('id', response.data.id);
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('token', response.data.token);

            window.location.assign('/home');
        }).catch((error) => {
            console.log(error)
        });
    }

    handleUsernameChange = (e) => {
        this.setState({username: e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    render() {
        return (
            <Content style={{ backgroundColor: "#5461fb", padding: '30px 50px', height: "100%" }}>
                <Title style={{ fontFamily: "Fjalla One", color: "white" }}>Prueba de log in</Title>

                <Form onSubmit={this.handleSubmit} className="login-form" style={{ width: "30%", marginLeft: "35%" }}>
                    
                    <Form.Item>
                        <Input
                            onChange={this.handleUsernameChange}
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.35)' }} />}
                            placeholder="Username"
                            value={this.state.username}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Input
                            onChange={this.handlePasswordChange}
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.35)' }} />}
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="secondary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                    </Form.Item>

                </Form>
            </Content>
        )
    }
}

export default Login;
