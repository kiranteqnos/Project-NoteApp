import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import firestore from '@react-native-firebase/firestore';
import { FAB } from 'react-native-elements';
import EditNote from './EditNote';

import { AuthContext } from '../navigation/AuthProvider';
import NoteCard from '../components/NoteCard';
import { Container, NoteBody } from '../styles/HomeStyle';


const HomeScreen = () => {
    const { user, setDocId, docId } = useContext(AuthContext);
    const [notes, setNotes] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);
    const [reload, setReload] = useState(false);

    const fetchNote = async () => {
        try {
            const list = []

            await firestore()
                .collection('note')
                .get()
                .then((querySnapshot) => {
                    //console.log('Total Posts:', querySnapshot.size);
                    querySnapshot.forEach(doc => {
                        const { noteTitle, noteBody, userId } = doc.data();
                        if (userId == user.uid)
                            list.push(
                                {
                                    id: doc.id,
                                    userId,
                                    title: noteTitle,
                                    body: noteBody
                                }
                            );
                    })
                })
            console.log(list);
            setNotes(list);

            if (loading) {
                setLoading(false);
            }

        } catch (e) {
            Alert.alert('An error occured', { e })
        }
    }

    useEffect(() => {
        fetchNote();
        setDeleted(false);
        setReload(false);
    }, [deleted,reload]);

    const editNote = async (noteId) =>{
        setDocId(noteId);
        console.log(noteId);
        console.log('Value setted for docId: ',docId);
        return (<EditNote/>);
    }

    const deleteNote = (noteId) => {
        console.log(noteId);
        firestore()
            .collection('note')
            .doc(noteId)
            .delete()
            .then(() => {
                Alert.alert('Note Deleted!', 'Note have been succesfully deleted');
                setDeleted(true);
            })
            .catch(e => console.log('Error deleteing Post: ', e))
 
    }

    if (notes == null) {
        return (<Text>'No notes to show'</Text>);
    }
    return (
        <Container>
            <FlatList
                data={notes}
                renderItem={({ item }) => <NoteCard item={item} onEdit={editNote} onDelete={deleteNote} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false} />
            <FAB
                visible={true}
                icon={{ name: 'refresh', color: 'white' }}
                color="#ffc000"
                onPress={()=>{setReload(true)}}
            />
        </Container>

    );
}

export default HomeScreen;
