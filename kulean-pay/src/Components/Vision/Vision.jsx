import React from "react";

import { getImageUrl } from "../../utils";
import styles from "./Vision.module.css";

export const Vision = () => {
    return(
        <div className={styles.Vision}>
            <div className={${styles.item} ${styles.one}}>
                <div className={styles.text}>
                    <div className={styles.header}>
                        <h5>Vision</h5>
                    </div>
                    <h2>To build high tech IT solutions that empower people and business</h2>
                </div>
                
                <div className={styles.imageDiv}>
                    <img className={styles.image} src={getImageUrl("image 46.png")} alt="" />
                </div>
            </div>
            
            <div className={${styles.item} ${styles.two}}>
                <div className={styles.imageDiv}>
                    <img className={styles.image} src={getImageUrl("image 47.png")} alt="gr" />
                </div>                
                
                <div className={styles.text}>
                    <div className={styles.header}>
                        <h5>MISSION</h5>
                    </div>
                    <h2>To create simplified solutions that make life and work easy
                    </h2>
                </div>
            </div>

               
                
            <div className={styles.textThree}>
                <div className={styles.header}>
                    <h5>SEE THE TEAM</h5>
                    <h2>Our team consists of a group of talented and creative people who work hard to
                    solve real problems and change how people live and work.</h2>
                </div>
                
                <button className={styles.but}>
                    View Team
                    <img src={getImageUrl("icons/whiteRightArrow.png")} alt="" />
                </button>

            </div>
            
        </div>
    )
}
