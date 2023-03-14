import * as React from 'react';
import { useState, useContext } from 'react';
import { Context } from '../context/UserContext';

export interface IUserProps {
}

export default function User(props: IUserProps) {



    const [user, setUser] = useState()

    const { getUser } = useContext(Context)

    const getUserSession = () => {
        const user = getUser
        console.log(user)
    }

    return (
        <div>
            <button onClick={getUserSession}>
                Usuario
            </button>
        </div>
    );
}
