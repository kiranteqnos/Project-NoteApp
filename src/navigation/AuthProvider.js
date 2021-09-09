import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [docId,setDocId]=useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                docId,
                setDocId,
                login: async (email, password, name) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (e) {
                        alert(e);
                    }
                },
                register: async (email, password, name) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                        .then(()=>{
                            firestore().collection('users').doc(auth().currentUser.uid)
                            .set({
                                name,
                                email,
                            }).catch(error =>{
                                console.log("Something went wrong : ", error);
                            });
                        }). catch(e=>{
                            copnsole.log("Something went wrong: ",e);
                        });
                    }
                     catch (e) {
                        alert(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        alert(e);
                    }
                },
            }}>
            {children}
        </AuthContext.Provider>
    );
};
