import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Benefit.module.css"

export const Benefit = () => {
    return <div className={styles.Benefit}>
        <div className={styles.bread}>
            <h5>BENEFITS</h5>
            <h1>What do you stand to gain</h1>
            <p>We offer you a seamless integration into your platform to enable
                your platform to enable you to make secure transactions through kuleanpay.
                We also provide you with different integration options basd on your preferences
            </p>
        </div>

        <div className={styles.crumb}>

            <div className={styles.text}>
                <div className={styles.header}>
                    <img src= {getImageUrl("img1.png")}alt="fr" />
                    <h2>Increased sales</h2>
                </div>
                <p>We help you stop unfinished deals by ensuring that every transactionis fulfilled
                    accordingly leaving both parties satisfied, and your customers happy.
                </p>
            </div>

            <div className={styles.text}>
                <div className={styles.header}>
                    <img src= {getImageUrl("img2.png")}alt="fr" />
                    <h2>Security</h2>
                </div>
                <p>Boost your customers confidence by providing top notch security to all their
                    transactions as our escrow sheild is placed on your transactions. We go the
                    extra mile to verify all your transactions.
                </p>
            </div>
            
            <div className={styles.text}>
                <div className={styles.header}>
                    <img src= {getImageUrl("img3.png")}alt="fr" />
                    <h2>Multiple payment options</h2>
                </div>
                <p>We provide you with a variety of payments options that give your customers
                    access to make their payments faster and conveniently.
                </p>
            </div>
        </div>

    </div>
}