import React, { Component } from "react";
import { InputField, CardItems } from "../common";
import { employeeUpdate, employeeCreate } from "../../actions";
import { connect } from "react-redux";
import { View, Text, Picker } from "react-native";
class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardItems>
          <InputField
            label="name"
            placeholder="Gautam"
            onChangeText={text =>
              this.props.employeeUpdate({
                prop: "name",
                value: text
              })
            }
            value={this.props.name}
          />
        </CardItems>
        <CardItems>
          <InputField
            label="phone"
            placeholder="4346045105"
            onChangeText={text =>
              this.props.employeeUpdate({
                prop: "phone",
                value: text
              })
            }
            value={this.props.phone}
          />
        </CardItems>
        <CardItems style={{ flexDirection: "column" }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardItems>
      </View>
    );
  }
}
const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = state => {
  return {
    name: state.employee.name,
    phone: state.employee.phone,
    shift: state.employee.shift
  };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeForm);
