import styles from './FormVerification.module.css'
import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Context } from '../../context/UserContext'

export interface IFormForgotPasswordProps {
    instructions: string,
    btnPasswordText: string,
    actionForm: 'email' | 'code'
}

export function FormForgotPassword({ instructions, btnPasswordText, actionForm }: IFormForgotPasswordProps) {

    const {id} = useParams()

    const [emailVerify, setEmailVerify] = useState('')

    const { verifyEmail } = useContext(Context)

    const handleSubmitEmail = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
           verifyEmail({
            email: emailVerify
        })  
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmitCode = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        try {
           verifyEmail({
            email: emailVerify
        })  
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section className={styles.form_verify_container}>
                <form className={styles.form_verify} onSubmit={actionForm === 'email' ? handleSubmitEmail : handleSubmitCode}>
                    <h4>{instructions}</h4>
                    <div>
                        <input type="email" name="verifyEmail" value={emailVerify} onChange={e => setEmailVerify(e.target.value)} required />
                    </div>
                    <div>
                        <input type="submit" value={btnPasswordText} />
                    </div>
                </form>
            </section>
        </>
    );
}
