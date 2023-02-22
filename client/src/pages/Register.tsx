import * as React from 'react';
import RegisterForm from '../components/forms/RegisterForm';

export interface IAppProps {
}

export default function Register(props: IAppProps) {
    return (
        <div>
            <RegisterForm />
        </div>
    );
}
