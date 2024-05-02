import React from "react";
import { getImageUrl } from "../../utils";

import styles from "./Money.module.css"

export const Money = () => {
    return(
        <div className= {styles.Money}>
            <div>
                <img src= {getImageUrl("image 54.png")} alt="ff" />
            </div>
            <div>
                <img src={getImageUrl("Frame 1.png")} alt=" ft" />
            </div>
        </div>
    )

    
}