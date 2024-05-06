import React from "react";
import styles from "./EscrowHow.module.css";
import { getImageUrl } from "../../utils";

export const EscrowHow = () => {
    return (
        <>
        <div className={styles.whole}>
            <h3>How it works</h3>

            <div className={`${styles.item} ${styles.one}`}>
                <div className={styles.text}>
                    <div className={styles.header}>
                        <img className={styles.icon} src={getImageUrl("icons/star3.png")} alt="" />
                        <h5>Create a transaction</h5>
                    </div>
                    <p>Signup on kuleanpay via web or mobile to create a tranaction. Enter the details  of the transaction and click "create transaction".</p>
                </div>
                
                <div className={styles.imageDiv}>
                    <img className={styles.image} src={getImageUrl("EHow1.png")} alt="" />
                </div>
            </div>

            <div className={`${styles.item} ${styles.two}`}>
                <div className={styles.imageDiv}>
                    <img className={styles.image} src={getImageUrl("EHow2.png")} alt="" />
                </div>                
                
                <div className={styles.text}>
                    <div className={styles.header}>
                        <img className={styles.icon} src={getImageUrl("icons/star3.png")} alt="" />
                        <h5>Join a transaction</h5>
                    </div>
                    <p>The other party instantly gets notified of the transaction you created with a transaction link via email and SMS, and clicks on "Join Transaction"</p>
                </div>
            </div>

            <div className={`${styles.item} ${styles.three}`}>
                <div className={styles.text}>
                    <div className={styles.header}>
                        <img className={styles.icon} src={getImageUrl("icons/star3.png")} alt="" />
                        <h5>Make payment</h5>
                    </div>
                    <p>After transaction is accepted by the other party, you will be prompted to make payment. Once payment is made, the other party would see the payment made but cannot access it.</p>
                </div>
                
                <div className={styles.imageDiv}>
                    <img className={styles.image} src={getImageUrl("EHow3.png")} alt="" />
                </div>
            </div>

            <div className={`${styles.item} ${styles.four}`}>
                <div className={styles.imageDiv}>
                    <img className={styles.image} src={getImageUrl("EHow1.png")} alt="" />
                </div>                
                
                <div className={styles.text}>
                    <div className={styles.header}>
                        <img className={styles.icon} src={getImageUrl("icons/star3.png")} alt="" />
                        <h5>Order processing</h5>
                    </div>
                    <p>The other party processes the order and delivers the product or service as expected. Once you are satisfied with the order, you would be prompted to confirm delivery.</p>
                </div>
            </div>

            <div className={`${styles.item} ${styles.five}`}>
                <div className={styles.text}>
                    <div className={styles.header}>
                        <img className={styles.icon} src={getImageUrl("icons/star3.png")} alt="" />
                        <h5>Release funds</h5>
                    </div>
                    <p>Once you confirm delivery of the product or service, the funds would be released into the other party's wallet and transaction is completed.</p>
                </div>
                
                <div className={styles.imageDiv}>
                    <img className={styles.image} src={getImageUrl("EHow1.png")} alt="" />
                </div>            
            </div>

        </div>
        </>
    )

}