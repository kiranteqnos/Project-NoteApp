import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { AddButton, ButtonWrapper, InputField, InputWrapper } from '../styles/CreateNoteStyle';
import { Container } from '../styles/HomeStyle';

import { AuthContext } from '../navigation/AuthProvider';

import firestore from '@react-native-firebase/firestore';
import HomeScreen from './HomeScreen';

const AddNote = () => {

    const [nTitle, setNtitle] = useState(null);
    const [body, setBody] = useState(null);
    const { user } = useContext(AuthContext);

    const submitNote = async () => {

        firestore()
            .collection('note')
            .add({
                userId: user.uid,
                noteTitle: nTitle,
                noteBody: body,
            })
            .then(() => {
                Alert.alert('Note created succesfully', 'Your note have been saved to firestore database');
                setNtitle(null);
                setBody(null);
            })
            .catch((error) => {
                Alert.alert('An error occured:', error);
            });
    }

    return (
        <Container>
            <InputWrapper>
                <InputField
                    value={nTitle}
                    onChangeText={(nTitle) => setNtitle(nTitle)}
                    title
                    placeholder='Enter title'
                />
                <InputField
                    value={body}
                    onChangeText={(body) => setBody(body)}
                    placeholder='Enter body'
                    multiline
                    numberOfLines={10}
                />
            </InputWrapper>
            <ButtonWrapper>
                <AddButton onPress={submitNote}>
                    <Text>Add</Text>
                </AddButton>
            </ButtonWrapper>
        </Container>
    );
}

export default AddNote;

