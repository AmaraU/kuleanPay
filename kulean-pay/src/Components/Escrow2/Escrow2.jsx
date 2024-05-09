import React from "react";
import styles from "./Escrow2.module.css";
import { getImageUrl } from "../../utils";

export const Escrow2 = () => {
    return (
        <div className={styles.whole}>
            <div className={styles.text}>
                <h1>Buy & sell with Kuleanpay Escrow</h1>
                <div className={styles.items}>
                    <div className={styles.item}>
                        <div className={styles.icon}><img src={getImageUrl("icons/escowIcon1.png")} alt="" /></div>
                        <div className={styles.itemText}>
                            <h4>Secure Transactions</h4>
                            <p>Seamless, transparent and secure transactions.</p>
                        </div>
                    </div>
                    
                    <div className={styles.item}>
                        <div className={styles.icon}><img src={getImageUrl("icons/escowIcon2.png")} alt="" /></div>
                        <div className={styles.itemText}>
                            <h4>Quality Service</h4>
                            <p>Authorize or receive payments seamlessly.</p>
                        </div>
                    </div>

                    <div className={styles.item}>
                        <div className={styles.icon}><img src={getImageUrl("icons/escowIcon3.png")} alt="" /></div>
                        <div className={styles.itemText}>
                            <h4>Timely Delivery</h4>
                            <p>The buyer and seller can track packages in real time.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.image}>
                <img className={styles.img1} src={getImageUrl("escowImg.png")} alt="" />
                <img className={styles.img2} src={getImageUrl("escrowImg2.png")} alt="" />
            </div>
        </div>
    )
}
