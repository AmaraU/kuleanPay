import { React, useState} from "react";

import styles from "./ResetPassword2.module.css";
import { getImageUrl } from "../../utils";

export const resetPassword2 = () => {

    function showPassword() {
        var x = document.getElementById("myPassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    return (
        <div className={styles.whole}>

            <div className={styles.container}>
                <button className={styles.back} onclick={() => history.back()} href="/resetPassword" ><img src={getImageUrl("icons/greyLeftArrow.png")} alt="back" /></button>
                <img className={styles.logo} src={getImageUrl("logos/darkKPLogo.png")} alt="kuleanpay" />
                <h2>Reset your password</h2>

                <form action="">

                    <div className={styles.formGroup}>
                        <label for="password">New Password</label>
                        <div className={styles.passwordDiv}>
                            <input type="password" name="password" id="myPassword" required />
                            <button onClick={() => showPassword()} type="button">
                                <img src={getImageUrl("icons/view.png")} alt="view" />
                            </button>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label for="password">Confirm New Password</label>
                        <div className={styles.passwordDiv}>
                            <input type="password" name="password" id="myPassword" required />
                            <button onClick={() => showPassword()} type="button">
                                <img src={getImageUrl("icons/view.png")} alt="view" />
                            </button>
                        </div>
                    </div>
                    <button className={styles.reset}>Reset password</button>
                </form>
            </div>
        </div>
    )
}