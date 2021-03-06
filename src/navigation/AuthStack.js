import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
    const [isFirstLaunch, setIsFirstLauch] = useState(null);
    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true');
                setIsFirstLauch(true);
            } else {
                setIsFirstLauch(false);
            }
        });
    }, []);


    if (isFirstLaunch === null) {
        return null;
    } else if (isFirstLaunch === true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login';
    }

    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name='Onboarding'
                component={OnboardingScreen}
                options={{ header: () => null }} />
            <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{header: () => null }} />
            <Stack.Screen
                name='Signup'
                component={SignupScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        shadowColor: '#f9fafd',
                        elevation: 0,
                    },
                    headerLeft: () => (
                        <View style={{marginLeft: 10}}>
                            <FontAwesome.Button
                                name='long-arrow-left'
                                size={25}
                                backgroundColor='#f9fafd'
                                color='#333'
                                onPress={() => navigation.navigate("Login")}
                            />
                        </View>
                    ),
                })}
            />
        </Stack.Navigator>
    );
}

export default App;