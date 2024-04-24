import React from "react";
import styles from "./Offers.module.css";
import { getImageUrl } from "../../utils";

export const Offers = () => {
    return (
        <>
        <div className={styles.whole}>
            <div className={styles.heading}>
                <h5>WHAT WE OFFER YOU</h5>
                <h2>Taking away the risks of fraudulent transactions</h2>
                <p>
                    Kuleanpay provides simple and transparent payment solutions to the legal and professional service industries, marketplaces and e-commerce platforms.
                </p>
            </div>

            <div className={styles.offers}>
                <div className={styles.offer}>
                    <div className={styles.icon}>
                        <img src={getImageUrl("icons/offersIcon1.png")} alt="" />
                    </div>
                    <h3>Buy & Sell with Escrow</h3>
                    <p>
                        Get fortified when you create or join a transaction as a buyer or seller. Send and receive messages with our chat feature, and have the peace of mind you deserve.
                    </p>
                </div>

                <div className={styles.offer}>
                    <div className={styles.icon}>
                        <img src={getImageUrl("icons/offersIcon2.png")} alt="" />
                    </div>
                    <h3>Bank with Kuleanpay</h3>
                    <p>
                        Enjoy instant and seemless transactions when you send and receive money by using our digital banking feature.
                    </p>
                </div>

                <div className={styles.offer}>
                    <div className={styles.icon}>
                        <img src={getImageUrl("icons/offersIcon3.png")} alt="" />
                    </div>
                    <h3>Merchant Payment Collection</h3>
                    <p>
                        Get paid with your customized payment link as a merchant with multiple payment options, and have your payments reflect instantly on your dashboard.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}