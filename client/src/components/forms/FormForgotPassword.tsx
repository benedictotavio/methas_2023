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

    const { id } = useParams()

    const [emailVerify, setEmailVerify] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [newConfirmPassword, setNewConfirmPassword] = useState('')
    const [codeEmailVerify, setCodeEmailVerify] = useState('')

    const { verifyEmail } = useContext(Context)
    const { verifyEmailCode } = useContext(Context)

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
            verifyEmailCode({
                password: newPassword,
                confirmPassword: newConfirmPassword
            }, {
                id: id,
                verifyCode: codeEmailVerify
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
                    {
                        id ?

                            <div>
                                <div>
                                    <input placeholder='Nova senha' type='text' name="newPassword" value={codeEmailVerify} onChange={e => setCodeEmailVerify(e.target.value)} required />
                                </div>
                                <div>
                                    <input placeholder='Nova senha' type='text' name="newPassword" value={newPassword} onChange={e => setNewPassword(e.target.value)} required />
                                </div>
                                <div>
                                    <input placeholder='Confirmar nova senha' type='text' name="newPasswordConfirmation" value={newConfirmPassword} onChange={e => setNewConfirmPassword(e.target.value)} required />
                                </div>
                            </div>

                            :

                            <div>
                                <input type="email" name="verifyEmail" value={emailVerify} onChange={e => setEmailVerify(e.target.value)} required />
                            </div>
                    }
                    <div>
                        <input type="submit" value={btnPasswordText} />
                    </div>
                </form>
            </section>
        </>
    );
}
