import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Escrow2.module.css"

export const Escrow= () => {
    return <div className={styles.Escrow}>
        <div className={styles.img}>
            <img src={getImageUrl("frame4.png")} alt="e.s" />
        </div>
        <div className={styles.text}>
            <div className={styles.header}>
                <h1>Buy & sell with Kuleanpay Escrow </h1>
            </div>
            <div className={styles.bread}>
                <img src={getImageUrl("pic1.png")}alt="pic" />
                <div>
                    <h4>Secure Transactions</h4>
                    <p>Seamless,transparent and secure transactions</p>
                </div>
                
            </div>
            <div className={styles.crumbs}>
                <img src={getImageUrl("pic2.png")} alt="p.s" />
                <div>
                    <h4>Quality Service</h4>
                    <p>Authorize or receive payments seamlessly</p>
                </div>
            </div>
            <div className={styles.alt}>
                <img src={getImageUrl("pic3.png")} alt="p.p" />
                <div>
                    <h4>Timely Delivery</h4>
                    <p>The buyer and seller can track packages in real time</p>
                </div>
            </div>
        </div>
    </div>
}