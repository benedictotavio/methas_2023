import React from 'react'
import styles from './Navbar.module.css'
import { BsHouseDoor } from 'react-icons/bs'
import { SlUser, SlSettings, SlLogout } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className={styles.logo}>
                <h1>
                    Methas
                </h1>
            </div>
            <div className={styles.nav_container}>
                <nav>
                    <ul>
                        <Link to='/home'>
                            <li className={styles.home_icon}>
                                <div>
                                    <BsHouseDoor />
                                </div>
                            </li>
                        </Link>

                        <li>
                            <div className="work-icon">
                                <SlUser />
                            </div>
                        </li>
                        <Link to='/config'>
                            <li className={styles.config}>
                                <div>
                                    <SlSettings />
                                </div>
                            </li>
                        </Link>
                        <li>
                            <div className="mail-icon">
                                <SlLogout />
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

        </>

    )
}

export default Navbar