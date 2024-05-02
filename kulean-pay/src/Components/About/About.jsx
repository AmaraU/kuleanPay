import React from "react";

import { getImageUrl } from "../../utils";

import styles from "./About.module.css"

export const About = () => {
    return(
        <div className={styles.About}>
            <div className={styles.bread}>
                <h1>About Kuleanpay</h1>
                <p>We are in the business of providing individuals and corporate bodies a 
                    secure online payment platform to reduce
                     the growing rate of fraudulent transaction online</p>
                <button className={styles}>
                    Get Started
                    <img className={styles.icon} src={getImageUrl("icons/whiteRightArrow.png")} alt="" />
                    </button>     
            </div>
        </div>
    )
}