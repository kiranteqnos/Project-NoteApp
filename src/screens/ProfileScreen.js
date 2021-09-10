import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = () => {
    const { user, logout } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);

    const getUser = async () => {
        const currentUser = await firestore()
            .collection('users')
            .doc(user.uid)
            .get()
            .then((documentSnapshot) => {
                if (documentSnapshot.exists) {
                    console.log('User Data: ',documentSnapshot.data());
                    setUserData(documentSnapshot.data());
                }
            })
    }

    useEffect(()=>{
        getUser();
    },[])

    return (
        <View style={styles.container} >
            <Text style={styles.text}>Hello {userData.name}</Text>
            <FormButton buttonTitle="Logout" onPress={() => { logout() }} />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    text: {
        fontSize: 20,
        color: '#333'
    }
});