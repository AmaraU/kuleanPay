import React from "react";

import { getImageUrl } from "../../utils";

import styles from "./Digital.module.css"

export const Digital = () => {
    return(
        <div className={styles.Digital}>
            <div className={styles.header}>
                <h1>Digital Banking</h1>
                <p>Say no to transaction delays and fraudulent transactions as you
                    send and receive money instantly within any bank in Nigeria with kuleanpay.
                </p>
                <button className={styles.bread}>
                     Get Started 
                     <img className={styles.icon} src={getImageUrl("icons/Icon1.png")} alt="" /></button>
                <button className={styles.crumb}>
                    How It works
                    <img className={styles.icon} src={getImageUrl("icons/Icons2.png")} alt="" /></button>
            </div>
            <div className={styles.banner}>
                <img className={styles.img} src={getImageUrl("Group 73.png")} alt="gr" />
                <img className={styles.i} src={getImageUrl("image 29.png")} alt="" />
            </div>
        </div>
    )
}