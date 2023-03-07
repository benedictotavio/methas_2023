import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from '../../context/UserContext';
import styles from './FormVerification.module.css'

export interface IFormVerificationProps {
}

export default function FormVerification(props: IFormVerificationProps) {

    const [verifyCode, setVerifyCode] = useState('')

    const { verifyUser } = useContext(Context)

    const { id } = useParams()

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        verifyUser({
            id: id,
            verifyCode: verifyCode
        })
    }

    return (
        <section className={styles.form_verify_container}>
            <form className={styles.form_verify} onSubmit={handleSubmit}>
                <h4>Copie e cole o codigo que enviamos para voce no seu email: </h4>
                <div>
                    <input type="text" name="verifyCode" id="verifyCode" onChange={e => setVerifyCode(e.target.value)} />

                </div>
                <div>
                    <input type="submit" value="Começe a bater Methas!" />
                </div>
            </form>
        </section>
    );
}
