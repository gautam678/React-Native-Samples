import React, { Component } from "react";
import { Card, CardItems, Button, Spinner } from "../common";
import { employeeUpdate, employeeCreate } from "../../actions";
import EmployeeForm from "./EmployeeForm";
import { connect } from "react-redux";
class EmployeeCreate extends Component {
  buttonPress() {
    const { name, phone, shift } = this.props;
    console.log(",aom", shift);
    this.props.employeeCreate({ name, phone, shift: shift || "Monday" });
  }
  //shiftChanged() {}
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardItems>
          <Button onPress={this.buttonPress.bind(this)}>Create</Button>
        </CardItems>
      </Card>
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
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
