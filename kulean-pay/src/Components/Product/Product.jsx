import React from "react";


import { getImageUrl } from "../../utils";

import styles from "./Product.module.css"

export const Product = () => {
    return <div className={styles.product}>
        <div className={styles.productImg}>
          <img src={getImageUrl("Frame 2.png")} alt="fr" />
        </div>


    </div>
}