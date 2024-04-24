import React from "react";
import styles from "./Footer.module.css";
import { getImageUrl } from "../../utils";

export const Footer = () => {
    return (
        <>
        <div className={styles.footer}>
            <div className={styles.banner}>
                <div className={styles.text}>
                    <p>DOWNLOAD THE MOBILE APP</p>
                    <h2>Protect yourself from fraudulent transactions</h2>
                    <div className={styles.buttons}>
                        <button className={styles.buttonOne}>
                            <img src={getImageUrl("logos/appStore.png")} alt="" />
                            APP STORE
                        </button>
                        <button className={styles.buttonTwo}>
                            <img src={getImageUrl("logos/googlePlay.png")} alt="" />
                            GOOGLE PLAY
                        </button>
                    </div>
                </div>

                <div className={styles.image}>
                    <img src={getImageUrl("footerImg.png")} alt="" />
                </div>
            </div>

            <div className={styles.bottom}>

                <div className={styles.logo}>
                    <img src={getImageUrl("logos/KPLogo.png")} alt="kuleanpay" />
                    <ul>
                        <li>Powered by <a href="">Fifthlab</a></li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <div className={styles.link}>
                        <p>QUICK LINKS</p>
                        <p><a href="">Product</a></p>
                        <p><a href="">Services</a></p>
                        <p><a href="">Partners</a></p>
                        <p><a href="">Create Transaction</a></p>
                    </div>
                    <div className={styles.link}>
                        <p>PRODUCT</p>
                        <p><a href="">Privacy Policy</a></p>
                        <p><a href="">Terms & Conditions</a></p>
                        <p><a href="">Priacy Policy</a></p>
                        <p><a href="">FAQs</a></p>
                    </div>
                    <div className={styles.link}>
                        <p>DEVELOPER</p>
                        <p><a href="">Documentation</a></p>
                        <p><a href="">API</a></p>
                    </div>
                    <div className={styles.link}>
                        <p>COMPANY</p>
                        <p><a href="">About us</a></p>
                        <p><a href="">Become a partner</a></p>
                        <p><a href="">Contact us</a></p>
                        <div className={styles.socials}>
                            <img src={getImageUrl("icons/facebook.png")} alt="" />
                            <img src={getImageUrl("icons/insta.png")} alt="" />
                            <img src={getImageUrl("icons/twitter.png")} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            

            <div className={styles.providus}>
                <img src={getImageUrl("logos/providus.png")} alt="" />
                <span>Payments processing by Providus Bank</span>
            </div>
        </div>
        </>
    )
}