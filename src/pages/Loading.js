import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';
import { PushSpinner } from "react-spinners-kit";
import { MagicSpinner } from "react-spinners-kit";


export function Loading() {
    

    return (
        <div className='main'>
            <div>
            <MagicSpinner size={30} color="#686769" loading={true} />;


            </div>
        </div>

    );
}

export default Loading;