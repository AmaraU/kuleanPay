import React, { useState } from "react";
import styles from "./Home.module.css";
import { getImageUrl } from "../../utils";

export const Home = () => {
    return (
        <>
        <div className={styles.whole}>
            <div className={styles.text}>
                <h2>Ensure what you ordered is what you get with kuleanpay</h2>
                <p>Buyers and sellers can now protect their money and integrity respectively when they use Kuleanpay.</p>
                <div className={styles.buttons}>
                    <button className={styles.buttonOne}>
                        <img src={getImageUrl("icons/homeIcon1.png")} alt="" />
                        Create Transaction
                    </button>

                    <div className={styles.buttonTwo}>
                        <img src={getImageUrl("icons/homeIcon2.png")} alt="" />
                        <input
                            type="text"
                            placeholder="Enter ID to join"
                        />
                    </div>
                </div>
            </div>

            <div></div>

            <div className={styles.pic}>
                <img src={getImageUrl("homeImg.svg")} alt="" />
            </div>
        </div>
        </>
    )
}