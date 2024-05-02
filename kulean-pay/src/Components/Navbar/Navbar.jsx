import React, { useState, useContext } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

import { ThemeContext } from '../ThemeContext';

export const Navbar = () => {

    const [ menuOpen, setMenuOpen ] = useState(false);
    const [ solutionsOpen, setSolutionsOpen ] = useState(false);

    // const { theme, setTheme } = React.useContext(ThemeContext);
    // const [imageIcon,setImageIcon] = React.useState(lightMode)

    // function switchOn(){
    //     setTheme(theme === 'dark' ? 'light' : 'dark' )
    //     setImageIcon(theme === 'dark' ? lightMode : darkMode)
    // }

    // setTimeout(()=>{
    //   setImageIcon(localStorage.getItem("color-theme")==='dark'? darkMode: lightMode)
    // }, 500)

    return (
        <>
        <div className={styles.whole}>
            <nav className={styles.navbar}>
                <a href="/" className={styles.logo}>
                    <img src={getImageUrl("logos/KPLogo.png")} alt="kuleanpay"/>
                </a>

                <div className={styles.folding}>

                    <img
                        className={styles.menuBtn}
                        src={getImageUrl("icons/menuIcon.png")}
                        alt="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    />

                    <div className={`${styles.onClose} ${menuOpen && styles.menuOpen}`} onClick={() => setMenuOpen(false)}>

                        <ul className={styles.links}>
                            <li>
                                <a className={styles.link} href="/whyKP">Why Kuleanpay</a>
                            </li>
                            <li>
                                <a className={styles.link} onMouseEnter={() => setSolutionsOpen(!solutionsOpen)}>
                                    <span>
                                        Solutions
                                        <img src={getImageUrl("icons/downArrow.png")} alt="" />
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className={styles.link} href="/partner">Partner</a>
                            </li>
                            <li>
                                <a className={styles.link} href="/company">Company</a>
                            </li>
                        </ul>

                        <div className={styles.buttons}>
                            <button className={styles.buttonOne}>Log in</button>
                            <button className={styles.buttonTwo}>Create Account</button>
                        </div>

                    </div>
                </div>
            </nav>

            <div className={`${styles.onCloseTwo} ${solutionsOpen && styles.solutions}`} onMouseLeave={() => setSolutionsOpen(false)}>

                <a href="/solutionsEscrow" className={styles.solution}>
                    <div className={styles.solutionHeader}>
                        <img src={getImageUrl("icons/star3.png")} />
                        <h3>Escrow</h3>
                    </div>
                    <p>Both buyers and sellers are protected and sunds held securely by us.</p>
                </a>

                <a href="/solutionsDB" className={styles.solution}>
                    <div className={styles.solutionHeader}>
                        <img src={getImageUrl("icons/star3.png")} />
                        <h3>Digital banking</h3>
                    </div>
                    <p>Say no to transaction delays and fraudulent transactions as you send and receive money.</p>
                </a>

                <a  href="/solutionsMerchant" className={styles.solution}>
                    <div className={styles.solutionHeader}>
                        <img src={getImageUrl("icons/star3.png")} />
                        <h3>Merchant payments collection</h3>
                    </div>
                    <p>Receive payments by offering your customers multiple payment options with just one link.</p>
                </a>
            </div>
            
        </div>
        </>
    )
}