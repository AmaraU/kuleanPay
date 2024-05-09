import React from "react";
import styles from "./Merchant.module.css";
import { getImageUrl } from "../../utils";

export const Merchant = () => {
    return (
        <>
        <div className={styles.theWhole}>
            <div className={styles.text}>
                <h3>Merchant payment collection</h3>
                <p>Receive payments securely with Kuleanpay and offer your customers multiple payment options with just <a>one link</a>.</p>
                <button>
                    Get Started
                    <img className={styles.icon} src={getImageUrl("icons/rightArrow.png")} alt="" />
                </button>
            </div>
            <div className={styles.image}>
                <img className={styles.img1} src={getImageUrl("MerchantImg.png")} alt="" />
                <img className={styles.img2} src={getImageUrl("merchantImg2.png")} alt="" />
            </div>
        </div>
        </>
    )
}

