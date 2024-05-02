import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Mission.module.css"

export const Mission = () => {
    return(
        <div className={styles.Mission}>
            <div className={styles.img}>
                <img src={getImageUrl("image 47.png")} alt="im" />
            </div>
            <div className={styles.bread}>
                <h5>Mission</h5>
                <h1>To create simplified solutions that make life and work easy</h1>
            </div>
        </div>
    )
}