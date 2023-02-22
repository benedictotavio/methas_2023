import { useContext, useState } from 'react'
import style from './LoginForm.module.css'
import { BsFacebook, BsGoogle } from 'react-icons/bs'

/* contexts */
import { Context } from '../../context/UserContext'
import { Link } from 'react-router-dom'


const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useContext(Context)

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        login({
            email: email,
            password: password
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
                <h3>Login</h3>

                <label htmlFor="username"></label>
                <input type="email" placeholder="Email" value={email} id="email" onChange={e => setEmail(e.target.value)} required/>

                <label htmlFor="password"></label>
                <input type="password" placeholder="Senha" value={password} id="password" onChange={e => setPassword(e.target.value)} required/>

                <div className={style.link_form}>
                    <Link to='/register'>
                        Não tem cadastro? Registre-se aqui.
                    </Link>
                </div>



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
    )
}

export default LoginForm