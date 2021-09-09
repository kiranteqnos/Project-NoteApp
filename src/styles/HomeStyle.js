import React from 'react';
import styled from 'styled-components';

export const Container = styled.View`
flex:1;
justify-content: flex-start;
align-items: center;
background-color: #fff;
`;

export const Card = styled.View`
background-color: #b3b3b3;
min-width: 95%;
border-radius: 10px;
margin-bottom: 10px;
margin-left: 10px;
margin-right: 10px;

`;
export const NoteTile = styled.Text`
color: black;
font-size: 20px;
font-weight: bold;
padding: 5px 20px 5px 20px;
`;
export const NoteBody = styled.Text`
color: black;
font-size: 15px;
padding: 0px 20px 10px 20px;
`;
export const ButtonContainer = styled.View`
flex-direction: row;
justify-content: space-between;
padding: 5px 20px 5px 20px;
`;
export const NoteButton = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: 5px;;
padding: 2px;
`;
export const ButtonText= styled.Text`
font-weight: bold;
`;
export const Divider = styled.View`

align-self: center;
border-color: #828282 ;
border-width: 1px;
min-width: 90%;
`;