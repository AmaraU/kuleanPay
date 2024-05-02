import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Benefit.module.css"

export const Benefit = () => {
    return <div className={styles.Benefit}>
        <div className={styles.bread}>
            <h5>Benefits</h5>
            <h1>What do you stand to gain</h1>
            <p>We offer you a seamless integration into your platform to enable
                your platform to enable you to make secure transactions through kuleanpay.
                We also provide you with different integration options basd on your preferences
            </p>
        </div>
        <div className={styles.img}>
            <img src= {getImageUrl("Frame 2404.png")}alt="fr" />
        </div>
    </div>
}