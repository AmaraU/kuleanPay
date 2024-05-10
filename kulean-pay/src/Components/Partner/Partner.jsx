import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Partner.module.css"

export const Partner = () => {
     return( <div className={styles.Partner}>
        <div className={styles.bread}>
            <h1>Become a partner with kuleanpay</h1>
            <p>Make money when you partner with Kuleanpay as you leverage our world
                class API help you to grow your business and accept safe payments.
                With just a few lines of code, you can quickly create safe, quick services
                and start taking payments.
            </p>
            
            <div className={styles.buttons}>
                <button className={styles.crumb}>Get in Touch </button>
                <button className={styles.crumbs}>
                    <img className={styles.icon} src={getImageUrl("icons/calender.png")} alt="" />
                    Schedule Meeting
                </button>
            </div>
            
        </div>
        <div className={styles.img}>
            <img src={getImageUrl("image1.png")} alt="aa" />
            </div>
     </div>
     )
}