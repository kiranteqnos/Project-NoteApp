import React from 'react';
import { View, Text, Button,Image, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
        onSkip={()=> navigation.replace('Login')}
        onDone={()=> navigation.navigate('Login')}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../../assets/images/index.png')} />,
                    title: 'Onboarding',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../../assets/images/kisspng-netbook-laptop-brand-vector-notebook-5a962b1cdb2a98.1307133715197908768977.jpg')} />,
                    title: 'Onboarding 2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                
  ]}
        />

    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});