import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/login_form';
import EmployeeList from './components/employee_list';
import EmployeeCreate from './components/employee_create';
import EmployeeEdit from './components/employee_edit';

const RouterComponent = () =>
	<Router sceneStyle={{ paddingTop: 60 }}>
		<Scene key="auth">
			<Scene
				key="login"
				component={LoginForm}
				title="Please login"
				initial
			/>
		</Scene>
		<Scene key="main">
			<Scene
				key="employeeList"
				component={EmployeeList}
				title="Employees"
				rightTitle="Add"
				onRight={() => Actions.employeeCreate()}
				initial
			/>
			<Scene
				key="employeeCreate"
				component={EmployeeCreate}
				title="Create Employee"
			/>
			<Scene
				key="employeeEdit"
				component={EmployeeEdit}
				title="Edit Employee"
			/>
		</Scene>

	</Router>;

export default RouterComponent;
