import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Mobile.module.css"

export const Mobile = () => {
    return <div className={styles.Mobile}>
            <img src={getImageUrl("frame6.png")} alt="fe" />
    </div>
}