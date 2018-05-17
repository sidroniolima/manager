import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList'
import EmployeeCreate from './src/components/EmployeeCreate'

const RouterComponent = () => {
	return (
		<Router sceneStyle={{paddingTop: 30}}>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={ LoginForm } title="Please login"/>				
				</Scene>

				<Scene key="main">
					<Scene 
						rightTitle="Add"
						onRight={ () => Actions.employeeCreate() }
						key="employeeList" 
						component={ EmployeeList } 
						title="Employees" 
						initial/>
					<Scene 
						rightTitle="Add"
						key="employeeCreate" 
						component={ EmployeeCreate } 
						title="Create Employee" />						
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;