import React from "react";
import styles from "./BlueBanner.module.css";
import { getImageUrl } from "../../utils";

export const BlueBanner = () => {
    return (
        <>
        <div className={styles.banner}>
            <img className={styles.img1} src={getImageUrl("shield.png")} alt="" />
            <img className={styles.img2} src={getImageUrl("shield2.png")} alt="" />
            <h2>The best way to save yourself from fraudulent transactions</h2>
            <p>Both buyers and sellers are protected with funds held in a third party escrow. Payments are released only after orders are fulfilled.</p>
            <button>
                Get Started
                <img className={styles.icon} src={getImageUrl("icons/whiteRightArrow.png")} alt="" />
            </button>
        </div>
        </>
    )
}