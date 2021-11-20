import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

//handles authentication

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}//end function

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }//end function

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }//end function

    const logout = () => {
        return auth.signOut()
    }//end function

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email);
    }

    const updateEmail = (email) => {
        currentUser.updateEmail(email)
    }

    const updatePassword = (password) => {
        currentUser.updatePassword(password)
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        
        return unsubscribe
    }, [])//end effect

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword
    }

    return (
        <div>
            <AuthContext.Provider value={value}>
                {!loading && children}
            </AuthContext.Provider>
        </div>
    )
}//end function