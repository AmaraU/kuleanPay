import React from "react";
import styles from "./Bank.module.css";
import { getImageUrl } from "../../utils";


export const Bank = () => {
    return (
        <>
        <div className={styles.theWhole}>
            <div className={styles.image}>
            <img className={styles.img1} src={getImageUrl("bankImg.png")} />
            <img className={styles.img2} src={getImageUrl("bankImg2.png")} />
            </div>
            <div className={styles.text}>
                <h3>Bank with Kuleanpay</h3>
                <p>Say no to transaction delays and fraudulent transactions as you send and receive money instantly within any bank in Nigeria with Kuleanpay.</p>
                <button>
                    Get Started
                    <img className={styles.icon} src={getImageUrl("icons/rightArrow.png")}  />
                </button>
            </div>
        </div>
        </>
    )
}