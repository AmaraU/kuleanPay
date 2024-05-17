import { React, useState} from "react";

import styles from "./LoginPage.module.css";
import { getImageUrl } from "../../utils";

export const LoginPage = () => {

    function showPassword() {
        var x = document.getElementById("myPassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    const [number, setNumber] = useState();


    return (
        <div className={styles.whole}>

            <div className={styles.container}>
                <img src={getImageUrl("logos/darkKPLogo.png")} alt="kuleanpay" />
                <h2>Welcome Back</h2>

                <form action="">
                    <div className={styles.numberFormGroup}>
                        <label for="number">Phone Number</label>
                        <div className={styles.phoneNumber}>

                            <select name="countryCode" required>
                                <option value="+234">+234</option>
                                <option value="+233">+233</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                            </select>
                            <input type="tel" name="number" required/>

                        </div>
                    </div>

                    <div className={styles.passwordFormGroup}>
                        <label for="password">Password</label>
                        <div className={styles.passwordDiv}>
                            <input type="password" name="password" id="myPassword" required />
                            <button onClick={() => showPassword()} type="button">
                                <img src={getImageUrl("icons/view.png")} alt="view" />
                            </button>
                        </div>
                        <a href="/resetPassword2">Forgot password?</a>
                    </div>

                    <div className={styles.rememberFormGroup} >
                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox">Remember me</label>
                    </div>

                    <a href="" className={styles.logIn}>Log In</a>
                </form>

                <p>I don't have an account. <a href="/createAccount">Create Account</a></p>

            </div>
        </div>
    )
}