import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Vision.module.css";

export const Vision = () => {
    return(
        <div className={styles.Vision}>
            <div className={styles.Bread}>
                <h5>Vision</h5>
                <h1>To build high tech IT solutions that empower people and businesses</h1>
            </div>
            <div className={styles.img}> 
                <img src={getImageUrl("image 46.png")} alt="Im" />
            </div>
        </div>
    )
}