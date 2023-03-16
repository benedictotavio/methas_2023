import React, { useContext, useState } from "react";
import { Context } from "../../context/UserContext";
import styles from "./Navbar.module.css";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { authenticated } = useContext(Context)
    return (
        <>
            {
                authenticated && <div className={styles.Navbar}>
                    <span className={styles.nav_logo}>METHAS</span>
                    <div className={isOpen ? styles.nav_items_open : styles.nav_items}>
                        <a href="/home"></a>
                        <a href="/config">Configurações</a>
                        <a href="/user">Area do Cliente</a>
                    </div>
                    <div
                        className={isOpen ? styles.nav_toggle : styles.nav_toggle_open}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className={styles.bar}></div>
                    </div>
                </div>
            }
        </>

    );
};

export default Navbar