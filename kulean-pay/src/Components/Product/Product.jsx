import React from "react";


import { getImageUrl } from "../../utils";

import styles from "./Product.module.css"

export const Product = () => {
   return <div className={styles.product}>
        <h5>ABOUT US</h5>
        <h1>Kuleanpay is a flagship product of Fifthlab limited</h1>
        
        <div className={styles.textLineDot}>
        
            <div className={styles.lineDot}>
                <img className={styles.dot} src={getImageUrl("dot.png")} alt="" />
                <img className={styles.line} src={getImageUrl("dottedLine.png")} alt="" />
                <img className={styles.dot} src={getImageUrl("dot.png")} alt="" />
            </div>
        
            <div className={styles.text}>
                <div className={styles.item}>
                    <img className={styles.dot2} src={getImageUrl("dot.png")} alt="" />
                    <p>Fifthlab is a startup with company with an ecosystem of advanced but simple solutions
                        focusing on delivering client's lives and daily opertions easy
                    </p>
                </div>
        
                <div>
                    <img className={styles.line2} src={getImageUrl("dottedLine2.png")} alt="" />
                </div>
        
                <div className={styles.item}>
                    <img className={styles.dot2} src={getImageUrl("dot.png")} alt="" />
                    <p>Fifthlab aspires to assume the role of a key Change  Catalyst, by combing
                        digital innovation with deep Financial Services expertise and thorough processes
                    </p>
                </div>
            </div>
        </div>
    </div>
}
