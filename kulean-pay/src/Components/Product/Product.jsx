import React from "react";


import { getImageUrl } from "../../utils";

import styles from "./Product.module.css"

export const Product = () => {
    return <div className={styles.product}>
        {/* <div className={styles.bread}>
            <h6>ABOUT US</h6>
            <h1>Kuleanpay is a flagship product of Fifthlab limited</h1>
        </div>
        <div className={styles.crumb}>
            <p>Fifthlab is a startup company with an ecosystem of advanced but simple 
                solutions focusing on delivering client centered products and servicces that make our
                client's lives and daiy operations easy. </p>
        </div>
        <div className={styles.crumb}>
            Fifthlab aspires to assume the role of a key Change Catalyst, by
            combining digital innovation with deep Financial Services expertise
            and thorough process. 
        </div> */}
        <div className={styles.product}>
          <img src={getImageUrl("Frame 2.png")} alt="fr" />
        </div>


    </div>
}