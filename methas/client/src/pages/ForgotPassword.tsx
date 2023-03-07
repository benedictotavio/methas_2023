import * as React from 'react';
import { FormForgotPassword } from '../components/forms/FormForgotPassword';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

export interface IForgotPasswordProps {
}

export default function ForgotPassword (props: IForgotPasswordProps) {
  return (
    <main>
    <Navbar />
    <FormForgotPassword instructions='Digite o código que nos enviamos para o seu e-mail.'
    btnPasswordText='Verificar código' actionForm='code'/>
    <Footer />
    </main>
  );
}
