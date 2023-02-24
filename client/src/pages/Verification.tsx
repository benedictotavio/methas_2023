import FormVerification from '../components/forms/FormVerification';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

export interface IVerificationProps {
}

export function Verification (props: IVerificationProps) {
  return (
    <main>
      <Navbar/>
      <FormVerification/>
      <Footer/>
    </main>
  );
}
