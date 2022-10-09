import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import './Loading.css';


export function Loading() {
    

    return (
        <div className='main'>
            <div>
            <Spinner animation="grow" variant="success" />

            </div>
        </div>

    );
}

export default Loading;