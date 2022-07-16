import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateScreen from "./screens/CreateScreen";
import IndexScreen from "./screens/IndexScreen";
import ShowScreen from "./screens/ShowScreen";
import EditScreen from "./screens/EditScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Index'
				screenOptions={{ title: "Blog" }}
			>
				<Stack.Screen name='Index' component={IndexScreen} />
				<Stack.Screen name='Show' component={ShowScreen} />
				<Stack.Screen name='Create' component={CreateScreen} />
				<Stack.Screen name='Edit' component={EditScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;
