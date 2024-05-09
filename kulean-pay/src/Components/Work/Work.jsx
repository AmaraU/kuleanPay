import React from "react";

import  styles from "./Work.module.css"

export const Work = () => {
    return(
        <div className={styles.work}>
           <h1> How it works</h1>
           <div className={${styles.item} ${styles.one}}>
                <div className={styles.text}>
                    <div className={styles.header}>
                        <img className={styles.icon} src={getImageUrl("star1.png")} alt="" />
                        <h5>Create an account</h5>
                    </div>
                    <p>Create an account via web or mobile and go to your account settings and complete
                        KYC verification for tier 1 and 2. Your account will be verified instantly and you
                        will be issued an account number
                    </p>
                    <p>Your aacount number will be visible when you choose the fund wallet
                        by bank transfer
                    </p>
                </div>
                
                <div className={styles.imageDiv}>
                    <img className={styles.image} src={getImageUrl("image 53.png")} alt="" />
                </div>
            </div>

            <div className={${styles.item} ${styles.two}}>
                <div className={styles.imageDiv}>
                    <img className={styles.image} src={getImageUrl("image 54.png")} alt="gr" />
                </div>                
                
                <div className={styles.text}>
                    <div className={styles.header}>
                        <img className={styles.icon} src={getImageUrl("star1.png")} alt="" />
                        <h5>Send & receive money instantly</h5>
                    </div>
                    <p>Say no to transactions because we offer you multiple payment options with super-fast transaction time.
                        We support all local banks in Nigeria
                    </p>
                </div>
            </div>
        </div>
    )
}
