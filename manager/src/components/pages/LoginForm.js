import React, { Component } from "react";
import { Card, InputField, CardItems, Button, Spinner } from "../common";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { emailChanged, passwordChanged, loginUser } from "../../actions";
class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }
  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorText}>{this.props.error}</Text>
        </View>
      );
    }
  }
  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    } else {
      return <Button onPress={this.onButtonPress.bind(this)}>Submit</Button>;
    }
  }

  render() {
    return (
      <Card>
        <CardItems>
          <InputField
            label="username"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardItems>
        <CardItems>
          <InputField
            label="password"
            placeholder="*****"
            secureTextEntry
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardItems>
        <CardItems>{this.renderButton()}</CardItems>
        {this.renderError()}
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);

const styles = {
  errorText: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};
