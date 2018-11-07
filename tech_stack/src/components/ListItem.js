import React, { Component } from "react";
import { CardItems } from "./common";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";
class ListItem extends Component {
  renderDescription() {
    const { library, expanded } = this.props;
    console.log(this.props);
    if (expanded) {
      return (
        <CardItems>
          <Text>{library.description}</Text>
        </CardItems>
      );
    }
  }
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardItems>
            <Text style={titleStyle}> {title}</Text>
          </CardItems>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
const styles = {
  titleStyle: {
    paddingLeft: 15,
    fontSize: 18
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryID === ownProps.library.id;

  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
