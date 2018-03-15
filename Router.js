import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './src/components/LoginForm';
import EmployeeList from './src/components/EmployeeList'

const RouterComponent = () => {
	return (
		<Router sceneStyle={{paddingTop: 30}}>
			<Scene key="root" hideNavBar>
				<Scene key="auth">
					<Scene key="login" component={ LoginForm } title="Please login" initial/>				
				</Scene>

				<Scene key="main">
					<Scene 
						rightTitle="Add"
						onRight={ () => { console.log('right!!!') }}
						key="employeeList" 
						component={ EmployeeList } 
						title="Employees" />
				</Scene>
			</Scene>
		</Router>
	);
};

export default RouterComponent;