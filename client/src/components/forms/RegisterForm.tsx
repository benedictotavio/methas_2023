import { useContext, useState } from 'react';
import style from './LoginForm.module.css'
import { BsFacebook, BsGoogle } from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Context } from '../../context/UserContext';

export interface IAppProps {
}

export default function RegisterForm(props: IAppProps) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { register } = useContext(Context)

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        try {
            register({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                passwordConfirmation: confirmPassword
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={style.form_login}>
            <div className={style.logo}>
                <h1>
                    Methas
                </h1>
            </div>
            <div className={style.background}>
                <div className={style.shape}></div>
                <div className={style.shape}></div>
            </div>
            <form onSubmit={handleSubmit}>
                <h3>Cadastre-se</h3>

                <label htmlFor="fname"></label>
                <input type="text" placeholder="Nome" value={firstName} id="Nome" onChange={e => setFirstName(e.target.value)} required/>

                <label htmlFor="lname"></label>
                <input type="text" placeholder="Sobrenome" value={lastName} id="Sobrenome" onChange={e => setLastName(e.target.value)} required/>

                <label htmlFor="email"></label>
                <input type="email" placeholder="E-mail" value={email} id="E-mail" onChange={e => setEmail(e.target.value)} required/>

                <label htmlFor="password"></label>
                <input type="password" placeholder="Senha" value={password} id="pass" onChange={e => setPassword(e.target.value)} required autoComplete='on'/>

                <label htmlFor="password"></label>
                <input type="password" placeholder="Confirme sua senha" value={confirmPassword} id="new-pass" onChange={e => setConfirmPassword(e.target.value)} required autoComplete='on' />

                <input type="submit" value="Log in"/>

                <div className={style.social}>
                    <div className={style.go}>
                        <i>
                            <BsGoogle />
                        </i>

                    </div>
                    <div className={style.fb}>
                        <i>
                            <BsFacebook />
                        </i>
                    </div>
                </div>
            </form>
        </div>
    );
}
