import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {

    const [ menuOpen, setMenuOpen ] = useState(false);

    return (
        <>
        <nav className={styles.whole}>
            <a href="/" className={styles.logo}>
                <img src={getImageUrl("logos/KPLogo.png")} alt="kuleanpay" />
            </a>

            <div className={styles.folding}>

                <ul className={styles.links}>
                    <li>
                        <a className={styles.link} href="">Why Kuleanpay</a>
                    </li>
                    <li>
                        <a className={styles.link} href="">Solutions</a>
                    </li>
                    <li>
                        <a className={styles.link} href="">Partner</a>
                    </li>
                    <li>
                        <a className={styles.link} href="">Company</a>
                    </li>
                </ul>

                <div className={styles.buttons}>
                    <button className={styles.buttonOne}>Log in</button>
                    <button className={styles.buttonTwo}>Create Account</button>
                </div>

            </div>

           

                {/* <img
                    className={styles.menuBtn}
                    src={
                        menuOpen ? getImageUrl("icons/closeIcon.png") : getImageUrl("icons/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                /> */}
                {/* <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setMenuOpen(false)}
                >
                    <li><a href="#about">Why Kuleanpay</a></li>
                    <li><a href="#experience">Solutions</a></li>
                    <li><a href="#projects">Partner</a></li>
                    <li><a href="#contact">Company</a></li>
                </ul> */}
        </nav>

        </>

        
    )
}