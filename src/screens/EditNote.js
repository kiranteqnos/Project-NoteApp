import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { AddButton, ButtonWrapper, InputField, InputWrapper } from '../styles/CreateNoteStyle';
import { Container } from '../styles/HomeStyle';

import { AuthContext, AuthProvider } from '../navigation/AuthProvider';

import firestore from '@react-native-firebase/firestore';
import HomeScreen from './HomeScreen';

const EditNote = () => {

    const [nTitle, setNtitle] = useState(null);
    const [body, setBody] = useState(null);
    const { user, docId } = useContext(AuthContext);
    const [data, setData] = useState(null);

    const getNote = async () => {
        await firestore()
            .collection('note')
            .doc(docId)
            .get()
            .then((documentSnapshot) => {
                console.log('Total Posts:', querySnapshot.size);
                if (documentSnapshot.exists) {
                    setData(documentSnapshot.data());
                }
            })
    }

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

    useEffect(()=>{
       getNote(); 
    },[]);

    return (
        <Container>
            <InputWrapper>
                <InputField
                    value={nTitle}
                    onChangeText={(nTitle) => setNtitle(nTitle)}
                    title
                    placeholder='Enter title'
                    value={data.noteTitle}
                />
                <InputField
                    value={body}
                    onChangeText={(body) => setBody(body)}
                    placeholder='Enter body'
                    value={data.noteBody}
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

export default EditNote;

