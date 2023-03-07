import React from 'react'
import styles from './UserZone.module.css'

const UserZone = () => {
    return (
        <div className={styles.user_zone}>
            <img src="" alt="" />
            <h5>
                Username
            </h5>
            <button>
                logout
            </button>
        </div>
    )
}

export default UserZone