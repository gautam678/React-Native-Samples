import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import Router from "./Router";
class App extends Component {
  componentWillMount() {
    var config = {
      apiKey: "AIzaSyAZdmhQU-dAPl2Bq1aW6i6btBlZ6fP6LWU",
      authDomain: "manager-final.firebaseapp.com",
      databaseURL: "https://manager-final.firebaseio.com",
      projectId: "manager-final",
      storageBucket: "manager-final.appspot.com",
      messagingSenderId: "574370853527"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
