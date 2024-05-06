import React from "react";
import styles from "./MerchantLink.module.css";
import { getImageUrl } from "../../utils";

export const MerchantLink = () => {
    return (
        <>
        <div className={styles.theWhole}>
            <h2>How to get your merchant link</h2>

            <div className={styles.textLineDot}>

                <div className={styles.lineDot}>
                    <img className={styles.dot} src={getImageUrl("dot.png")} alt="" />
                    <img className={styles.line} src={getImageUrl("dottedLine.png")} alt="" />
                    <img className={styles.dot} src={getImageUrl("dot.png")} alt="" />
                </div>

                <div className={styles.text}>
                    <div className={styles.item}>
                        <img className={styles.dot2} src={getImageUrl("dot.png")} alt="" />
                        <p>After you create an account on Kuleanpay via web or mobile, go to settings and upgrade your KYC tier to Merchant level.</p>
                    </div>

                    <div>
                        <img className={styles.line2} src={getImageUrl("dottedLine2.png")} alt="" />
                    </div>

                    <div className={styles.item}>
                        <img className={styles.dot2} src={getImageUrl("dot.png")} alt="" />
                        <p>Navigate to the merchant section and click on "Generate payment link" input your custom link name and generate your link.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}