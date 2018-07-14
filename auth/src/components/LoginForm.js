import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardItems, InputField } from './common';

class LoginForm extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    buttonPress() {
        const { email, password } = this.state;
        this.setState({error:''});
        firebase.auth().signInWithEmailAndPassword(email, password).catch((() => {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch((() => {
                this.setState({ error: "Authentication Failed" });
            }))
        }))

    }
    render() {
        return (
            <View>
                <Card>
                    <CardItems>
                        <InputField placeHolder="abc@gmail.com" label="Email" value={this.state.email} onChangeType={email => this.setState({ email })} />
                    </CardItems>
                    <CardItems>
                        <InputField secureTextEntry placeHolder="********" label="Password" value={this.state.password} onChangeType={password => this.setState({ password })} />
                    </CardItems>
                    <Text>
                        {this.state.error}
                    </Text>
                    <CardItems>
                        <Button onPress={this.buttonPress.bind(this)} > Login </Button>
                    </CardItems>
                </Card>
            </View>
        );
    }
}


export default LoginForm;