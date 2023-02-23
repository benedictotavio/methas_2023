import styles from './Navbar.module.css'
import { BsHouseDoor } from 'react-icons/bs'
import { SlUser, SlSettings, SlLogout } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/UserContext'

const Navbar = () => {

    const {logout} = useContext(Context)

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
                <nav>
                    <ul>
                        <Link to='/home'>
                            <li className={styles.home_icon}>
                                <div>
                                    <BsHouseDoor />
                                </div>
                            </li>
                        </Link>
                        <Link to='/user'>
                            <li className={styles.user}>
                                <div className="work-icon">
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
                        <li>
                            <div className="mail-icon">
                                <SlLogout onClick={handleExit} />
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>

        </>

    )
}

export default Navbar