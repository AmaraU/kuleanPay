import React from "react";
import styles from "./MerchantHow.module.css";
import { getImageUrl } from "../../utils";

export const MerchantHow = () => {
    return (
        <>
        <div className={styles.whole}>
            <h2>How it works</h2>

            <div className={`${styles.item} ${styles.one}`}>
                <p>We give you a customized payment link when you upgrade to Merchant level.</p>
                <img className={styles.img} src={getImageUrl("MHow1.png")} alt="" />
            </div>

            <div className={`${styles.item} ${styles.two}`}>
                <img src={getImageUrl("MHow2.png")} alt="" />
                <p>This link can be used to receive payments instantly from your customers and can be disabled or generated as you wish. <a>Get Linked! Get Paid!</a></p>
            </div>

            <div className={`${styles.item} ${styles.three}`}>
                <p>We also give you a dashboard to track all the money received via your merchant links to ensure accountability and accuracy.</p>
                <img src={getImageUrl("MHow3.png")} alt="" />
            </div>
        </div>
        </>
    )
}