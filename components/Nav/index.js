import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Editor, Viewer, Files, Finder } from '../../pages'
const Tab = createBottomTabNavigator();

const Nav = () => {
	return (<NavigationContainer>
		<Tab.Navigator
			screenOptions={({ route }) => navOptions(route)}
		>
			{tabs.map((tab, i) => (
				<Tab.Screen key={i} name={tab.name} component={tab.component} />
			))}
		</Tab.Navigator>
	</NavigationContainer>
	)
}

const tabs = [
	{ name: "Finder", component: Finder },
	{ name: "Files", component: Files },
	{ name: "Viewer", component: Viewer },
	{ name: "Editor", component: Editor },
]

const navOptions = (route) => {
	function getIcon(routeName, focused) {
		if (routeName === 'Viewer') {
			return focused ? 'eye-outline' : 'eye';
		}
		if (routeName === 'Files') {
			return focused ? 'file-tray-stacked-outline' : 'file-tray-stacked';
		}
		if (routeName === 'Editor') {
			return focused ? 'create-outline' : 'create';
		}
		if (routeName === 'Finder') {
			return focused ? 'search-circle-outline' : 'search-circle';
		}
	}
	return {
		tabBarIcon: ({ focused, color, size }) => {
			const iconName = getIcon(route.name, focused)
			return <Ionicons name={iconName} size={size} color={color} />;
		},
		tabBarActiveTintColor: 'tomato',
		tabBarInactiveTintColor: 'gray',
		headerShown: false,
	}
}
export default Nav;