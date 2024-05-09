import React from "react";
import styles from "./EscrowHome.module.css"
import { getImageUrl } from "../../utils";

export const EscrowHome = () => {
    return (
        <>
        <div className={styles.whole}>

            <div className={styles.heading}>
                <h2>Go Escrow with Kuleanpay</h2>
                <p>Both buyers and sellers are protected and funds held securely by us. Payments are released only after orders are fulfilled.</p>
                <div className={styles.buttons}>
                    <button className={styles.buttonOne}>
                        Get Started
                        <img src={getImageUrl("icons/whiteRightAngle.png")} alt="" />
                    </button>
                    <button className={styles.buttonTwo}>
                        How It Works
                        <img src={getImageUrl("icons/greyDownArrow.png")} alt="" />
                    </button>
                </div>
            </div>

            <div className={styles.image}>
                <img className={styles.mainImg1} src={getImageUrl("EscrowHomeImg.png")} alt="" />
                <img className={styles.mainImg2} src={getImageUrl("handshake3.png")} alt="" />
            </div>



        </div>
        </>
    )
}