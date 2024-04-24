import React from "react";
import styles from "./Join.module.css";

export const Join = () => {
    return (
        <>
        <div className={styles.theWhole}>
            <p>NEWS & UPDATES</p>
            <h1>Join the Kuleanpay Community</h1>
            <div className={styles.join}>
                <input type="text"placeholder="Enter email address" />
                <button>Join</button>
            </div>
            <div className={styles.telegram}>
                <p>Join us on <a href="">Telegram</a></p>
            </div>

        </div>
        </>
    )
}