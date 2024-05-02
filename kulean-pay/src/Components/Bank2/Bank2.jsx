import React from'react'

import { getImageUrl } from "../../utils";
import styles from"./Bank2.module.css";

export const Bank = () => {
    return <div className={styles.Bank}>
        <div className={styles.bread}>
            <img src={getImageUrl("frame1.png")} alt="frame" />
            <h1>Buy & sell with Escrow</h1>
            <p>Get fortified when you create or join a transaction as a buyer or seller.
                Send and receine messages with our chat feature, and have the peace of mind you desrve.
            </p>
        </div>
        <div className={styles.bread}>
            <img src={getImageUrl("frame2.png")} alt="F.R" />
            <h1>Bank with Kuleanpay</h1>
            <p>Enjoy instant and seemless transactions when you send and receive money by using
                our digital banking feature.
            </p>
        </div>
        <div className={styles.bread}>
            <img src={getImageUrl("frame3.png")} alt="f.f" />
            <h1>Merchant Payment Collection</h1>
            <p>Get paid with your customized payment link as a merchant with multiple payment
                options,and have your payments reflect instantly on your dashboard.
            </p>
        </div>
    </div>
}