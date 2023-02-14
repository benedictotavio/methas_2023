import React from 'react'
import style from './LoginForm.module.css'
import { BsFacebook, BsGoogle } from 'react-icons/bs'

const LoginForm = () => {
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
            <form>
                <h3>Login Here</h3>

                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" />

                <button>Log In</button>
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