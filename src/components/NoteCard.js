import React from 'react';
import {
    ButtonContainer,
    ButtonText,
    Card,
    Container,
    Divider,
    NoteBody,
    NoteButton,
    NoteTile
} from '../styles/HomeStyle'

import Ionicons from 'react-native-vector-icons/Ionicons';


const NoteCard = ({item, onDelete, onEdit}) => {
    return (
        <Card>
            <NoteTile>{item.title}</NoteTile>
            <NoteBody>{item.body}</NoteBody>
            <Divider />
            <ButtonContainer>
                <NoteButton onPress={()=>onEdit(item.id)}>
                    <Ionicons name='create' size={25} />
                    <ButtonText>Edit</ButtonText>
                </NoteButton>
                <NoteButton onPress={()=>onDelete(item.id)}>
                    <Ionicons name='trash' size={25} />
                    <ButtonText>Delete</ButtonText>
                </NoteButton>
            </ButtonContainer>
        </Card>
    );
}
export default NoteCard;