import React from 'react'

import { getImageUrl } from "../../utils.js";
import styles from "./Transaction.module.css"

export const Transaction = () => {
    return (
    <div className={styles.Transaction}>
        <div className={styles.text}>
            <div className={styles.heading}>
                <h1>We protect both partieson all transactions</h1>
                <p>We ensure that both buyers and sellers are protected on every transaction</p>
            </div>
            <div className={styles.button}>
                <button>Create Account</button>
            </div>
        </div>
        
        <div className={styles.image}>
            <img src={getImageUrl("fill.png")}  alt="fill" />
        </div>
        
    </div>
        
    )

} 


