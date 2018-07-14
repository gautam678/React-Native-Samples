import React, { Component } from 'react';
import { View} from 'react-native';
import firebase from 'firebase';
import { Header } from './common';
import LoginForm from './LoginForm';



class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCae46xxXCYpaSZTxvd_eS69_7hG8Jf81o",
            authDomain: "authentication-55382.firebaseapp.com",
            databaseURL: "https://authentication-55382.firebaseio.com",
            projectId: "authentication-55382",
            storageBucket: "authentication-55382.appspot.com",
            messagingSenderId: "345642795563"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="An Auth App" />
                <LoginForm/>
            </View>
        );
    }
}

export default App;