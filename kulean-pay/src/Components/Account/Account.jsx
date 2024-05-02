import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Account.module.css";

export const Account = () => {
    return( <div className={styles.account}>
        <div>
            <img src={getImageUrl("Frame 4.png")}alt="fr" />
        </div>
        <div>
            <img className={styles.img} src={getImageUrl("image 53.png")} alt="pp" />
        </div>
        </div>
        
    )
}