import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Text, View, TouchableWithoutFeedback } from "react-native";
import { CardItems } from "../common";
class ListItem extends Component {
  onRowPress() {
    Actions.createEmployee({ employee: this.props.employee });
  }
  render() {
    const { name } = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardItems>
            <Text style={styles.titleStyles}>{name}</Text>
          </CardItems>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyles: {
    fontSize: 18,
    paddingLeft: 15
  }
};
export default ListItem;
