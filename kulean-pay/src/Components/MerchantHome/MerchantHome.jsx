import React from "react";
import styles from "./MerchantHome.module.css";
import { getImageUrl } from "../../utils";

export const MerchantHome = () => {
    return (
        <>
        <div className={styles.whole}>

            <div className={styles.heading}>
                <h2>Merchant payments collection</h2>
                <p>Receive payments securely with Kuleanpay and offer your customers multiple payment options with just one link.</p>
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
                {/* <img className={styles.mainImg1} src={getImageUrl("MHomeImg.png")} alt="" /> */}
                <img className={styles.mainImg1} src={getImageUrl("MerchantHomeImg.png")} alt="" />
                <img className={styles.mainImg2} src={getImageUrl("MHomeImg2.png")} alt="" />
                {/* <div className={styles.boxOne}>
                    <img src={getImageUrl("icons/star1.png")} alt="" />
                    <p>Get a customizable merchant link </p>
                </div>

                <div className={styles.boxTwo}>
                    <img src={getImageUrl("icons/star2.png")} alt="" />
                    <p>Real time analytics on inflow</p>
                </div> */}
            </div>
        </div>
        </>
    )
}