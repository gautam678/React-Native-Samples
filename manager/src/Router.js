import React from "react";
import { Scene, Router } from "react-native-router-flux";
import LoginForm from "./components/pages/LoginForm";
import EmployeeList from "./components/pages/EmployeeList";
import EmployeeForm from "./components/pages/EmployeeForm";
import { Actions } from "react-native-router-flux";
const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="please Login"
            initial
          />
        </Scene>
        <Scene key="main">
          <Scene
            key="list"
            component={EmployeeList}
            title="List of employee"
            rightTitle="Add"
            initial
            onRight={() => {
              Actions.createEmployee();
            }}
          />
          <Scene
            key="createEmployee"
            component={EmployeeForm}
            title="Enter employee details"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
