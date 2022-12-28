import React from 'react'
import {useAuthValue} from '../pages/Sign-up/AuthContext'




export default function Loggedin(props) {
    
    const {currentUser} = useAuthValue()

    return (
        <div>
            This is the proposed site for Logged in page{currentUser?.displayName}
        </div>
    )
}
