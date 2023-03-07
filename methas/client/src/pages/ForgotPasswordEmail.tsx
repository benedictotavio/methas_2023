import { FormForgotPassword } from '../components/forms/FormForgotPassword';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

export interface IForgotPasswordEmailProps {
}

export function ForgotPasswordEmail (props: IForgotPasswordEmailProps) {
  return (
    <>
      <Navbar/>
      <FormForgotPassword instructions='Digite o e-mail cadastrado no Methas, que nos enviaremos um codigo para o seu e-mail.' btnPasswordText='Me envie o código de verificação' actionForm='email'/>
      <Footer/>
    </>
  );
}
