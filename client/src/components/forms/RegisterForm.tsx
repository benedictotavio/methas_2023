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
        register({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            passwordConfirmation: confirmPassword
        })
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

                <label htmlFor="password">Nome</label>
                <input type="password" placeholder="Password" value={firstName} id="Nome" onChange={e => setFirstName(e.target.value)} />

                <label htmlFor="password">Sobrenome</label>
                <input type="password" placeholder="Sobrenome" value={lastName} id="Sobrenome" onChange={e => setLastName(e.target.value)} />

                <label htmlFor="username">E-Mail</label>
                <input type="email" placeholder="E-mail" value={email} id="E-mail" onChange={e => setEmail(e.target.value)} />

                <label htmlFor="password">Senha</label>
                <input type="password" placeholder="Senha" value={password} id="Senha" onChange={e => setPassword(e.target.value)} />

                <label htmlFor="password">Confirmar senha</label>
                <input type="password" placeholder="Confirme sua senha" value={confirmPassword} id="password" onChange={e => setConfirmPassword(e.target.value)} />
                <input type="submit" value="Log in" />


                <div className={style.social}>
                    <div className={style.go}>
                        <i>
                            <BsGoogle />
                        </i>

                    </div>
                    <div className={style.fb}>
                        <i>
                        </i>
                        <BsFacebook />
                    </div>
                </div>
            </form>
        </div>
    );
}
