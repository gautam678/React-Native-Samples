import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = props => {
  return (
    <TouchableOpacity onPress={() => props.onPress()} style={styles.button}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 5,
    alignSelf: "stretch",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#0F0F0F",
    marginLeft: 5,
    marginRight: 5,
    width: null
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10
  }
};
export { Button };
