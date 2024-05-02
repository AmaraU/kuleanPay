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
                        <a href="https://apps.apple.com/ng/app/kuleanpay/id1659853273" target="_blank" className={styles.buttonOne}>
                            <img src={getImageUrl("logos/appStore.png")} alt="" />
                            APP STORE
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.cwg.kuleanpay" target="_blank" className={styles.buttonTwo}>
                            <img src={getImageUrl("logos/googlePlay.png")} alt="" />
                            GOOGLE PLAY
                        </a>
                    </div>
                </div>

                <div className={styles.image}>
                    <img src={getImageUrl("footerImg.png")} alt="" />
                </div>
            </div>

            <div className={styles.bottom}>

                <div className={styles.logo}>
                    <a href="https://www.thefifthlab.com"><img src={getImageUrl("logos/KPLogo.png")} alt="kuleanpay" /></a>
                    <ul>
                        <li>Powered by <a href="https://www.thefifthlab.com">Fifthlab</a></li>
                    </ul>
                </div>

                <div className={styles.links}>
                    <div className={styles.link}>
                        <p>QUICK LINKS</p>
                        <p><a href="">Product</a></p>
                        <p><a href="">Services</a></p>
                        <p><a href="/partner">Partners</a></p>
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
                        <p><a href="/partner">Become a partner</a></p>
                        <p><a href="">Contact us</a></p>
                        <div className={styles.socials}>
                            <a href="https://www.facebook.com/FifthlabAfrica" target="_blank"><img src={getImageUrl("icons/facebook.png")} alt="" /></a>
                            <a href="https://twitter.com/FifthlabAfrica" target="_blank"><img src={getImageUrl("icons/insta.png")} alt="" /></a>
                            <a href="https://www.instagram.com/fifthlabafrica" target="_blank"><img src={getImageUrl("icons/twitter.png")} alt="" /></a>
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