import styles from './Navbar.module.css'
import { BsHouseDoor } from 'react-icons/bs'
import { SlUser, SlSettings, SlLogout } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/UserContext'

const Navbar = () => {

    const { logout } = useContext(Context)
    const { authenticated } = useContext(Context)

    const handleExit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        logout()
    }

    return (
        <>
            <div className={styles.logo}>
                <h1>
                    Methas
                </h1>
            </div>
            <div className={styles.nav_container}>
                {authenticated && <> <nav className={styles.nav_container}>
                    <ul>
                        <Link to='/home'>
                            <li className={styles}>
                                <div>
                                    <BsHouseDoor />
                                </div>
                            </li>
                        </Link>
                        <Link to='/user'>
                            <li className={styles}>
                                <div>
                                    <SlUser />
                                </div>
                            </li>
                        </Link>

                        <Link to='/config'>
                            <li className={styles.config}>
                                <div>
                                    <SlSettings />
                                </div>
                            </li>
                        </Link>
                        <li onClick={handleExit}>
                            <div className="mail-icon">
                                <SlLogout />
                            </div>
                        </li>
                    </ul>
                </nav>
                    <nav className={styles.nav_container_mobile}>
                        <ul>
                            <Link to='/home'>
                                <li className={styles}>
                                    <div>
                                        <BsHouseDoor />
                                    </div>
                                </li>
                            </Link>
                            <Link to='/user'>
                                <li className={styles}>
                                    <div className="work-icon">
                                        <SlUser />
                                    </div>
                                </li>
                            </Link>

                            <Link to='/config'>
                                <li className={styles}>
                                    <div>
                                        <SlSettings />
                                    </div>
                                </li>
                            </Link>
                            <li onClick={handleExit}>
                                <div className="mail-icon">
                                    <SlLogout />
                                </div>
                            </li>
                        </ul>
                    </nav>
                </>
                }

            </div>

        </>

    )
}

export default Navbar