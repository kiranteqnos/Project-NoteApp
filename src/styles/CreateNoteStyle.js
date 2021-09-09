import React from 'react';
import styled from 'styled-components';

export const Container = styled.View`
flex:1;
width: 100%;

`;

export const InputWrapper = styled.View`
flex:200;
justify-content: center;
align-items: center;
width: 100%;
background-color: #2e64e515;
padding-top: 30%;

`;
export const InputField = styled.TextInput`
justify-content: center;
align-items: center;
font-size: ${props => props.title ? '25px' : '17px'};
text-align: center;
width: 90%;
`;
export const ButtonWrapper = styled.View`
flex:20;
justify-content: flex-start;
align-items: center;
width: 100%;
background-color: #2e64e515;
padding-bottom:30px;
`;
export const AddButton = styled.TouchableOpacity`
justify-content: center;
align-items: center;
border-radius: 5px;;
padding: 2px;
width: 25%;
height: 30px;
border-radius: 30px;
background-color: #ffc000;
`;