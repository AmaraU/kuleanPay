import React from "react";

import styles from "./Team.module.css";

export const Team = () => {
    return (
        <div className={styles.team}>
        <div className={styles.bread}>
            <h5>SEE THE TEAM </h5>
            <h1>Our team consists of a group of talented and creative
                people who work hard to solve real problems and change
                how people live and work.
            </h1>
        </div>
        <div>
        <button  className={styles.button}>View Team </button>
        </div>
    </div>
    )
}