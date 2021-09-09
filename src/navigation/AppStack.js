import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AddNote from '../screens/AddNote';

const Tab = createBottomTabNavigator();

const AppStack = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'clipboard'
                            : 'clipboard-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Add') {
                        iconName = focused ? "add-circle" : 'add-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#ffc000',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name='Home' component={HomeScreen} />
            <Tab.Screen name='Add' component={AddNote} />
            <Tab.Screen name='Profile' component={ProfileScreen} />
        </Tab.Navigator>
    );
}
export default AppStack;