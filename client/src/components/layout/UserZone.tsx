import React, { useContext } from 'react'
import { Context } from '../../context/UserContext'
import styles from './UserZone.module.css'

interface IUserZone {
    userSession: object
}
const UserZone = () => {
    const { logout } = useContext(Context)
    return (
        <div className={styles.user_zone}>
            <img src="" alt="" />
            <h5>
                Username
            </h5>
            <button onClick={() => logout()}>
                logout
            </button>
        </div>
    )
}

export default UserZone