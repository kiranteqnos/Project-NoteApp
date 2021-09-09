import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, Image, Button, StyleSheet, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore'

import AntDesign from 'react-native-vector-icons/AntDesign';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

const SignupScreen = ({ navigation }) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const { register } = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>
            <FormInput
                labelValue={name}
                onChangeText={(userName) => setName(userName)}
                placeholderText='Full Name'
                iconType='user'
                autoCorrect={false}
            />
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText='Email'
                iconType='mail'
                keyboardType='email-address'
                autoCapitalize='none'
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText='Password'
                iconType='lock'
                secureTextEntry={true}
            />
            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText='Confirm Password'
                iconType='lock'
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle='Sign Up'
                onPress={() => {
                    if (password == confirmPassword) {
                        register(email, password, name);
                    } else {
                        Alert.alert("Couldnt create account!", 'Passwords dont match.')
                    }
                }
                }
            />

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>By registering, you confirm that you accept our </Text>
                <TouchableOpacity onPress={() => alert("Terms and services.")}><Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Terms of service</Text></TouchableOpacity>
                <Text style={styles.color_textPrivate}>and </Text>
                <TouchableOpacity onPress={() => alert("Privacy Policy.")}><Text style={[styles.color_textPrivate, { color: '#e88832' }]}>Privacy Policy</Text></TouchableOpacity>

            </View>

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => { navigation.navigate('Login') }}
            >
                <Text style={styles.navButtonText}>Have an account? Sign In.</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center'
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        color: 'grey'
    }
});