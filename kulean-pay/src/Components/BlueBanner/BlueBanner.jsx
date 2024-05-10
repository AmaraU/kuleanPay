import React from "react";
import styles from "./BlueBanner.module.css";
import { getImageUrl } from "../../utils";
import img from "../../../assets/grid.png";


export const BlueBanner = () => {
    return (
        <>
        <div className={styles.banner} style={{backgroundImage:`url(${img})`}}>
            <img className={styles.img1} src={getImageUrl("shield.png")} alt="" />
            <img className={styles.img2} src={getImageUrl("shield2.png")} alt="" />
            <h2>The best way to save yourself from fraudulent transactions</h2>
            <p>Both buyers and sellers are protected with funds held in a third party escrow. Payments are released only after orders are fulfilled.</p>
            <a href="https://play.google.com/store/apps/details?id=com.cwg.kuleanpay&pli=1" target="_blank">
                Get Started
                <img className={styles.icon} src={getImageUrl("icons/whiteRightArrow.png")} alt="" />
            </a>
        </div>
        </>
    )
}