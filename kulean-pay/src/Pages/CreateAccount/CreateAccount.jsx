import React, { useEffect, useState } from "react";
import styles from "./CreateAccount.module.css";
import { getImageUrl } from "../../utils";

export const CreateAccount = () => {
    

    function toggle() {

        var popup = document.getElementById('popup');
        popup.classList.add(`${styles.popped}`);

        var dimmer = document.getElementById('dimmer');
        dimmer.classList.add(`${styles.dim}`);

        var theinputs = document.querySelectorAll("#password");
        theinputs.forEach((input) => {
            input.value="";
            input.setAttribute("disabled", true);
        })
        theinputs[0].removeAttribute("disabled");


        const inputs = document.querySelectorAll("#password");
        const button = document.querySelector("#continue");

        console.log(inputs);
        console.log(button);

        inputs.forEach((input, index1) => {
            input.addEventListener("keyup", (e) => {
                const currentInput = input,
                nextInput = input.nextElementSibling,
                previousInput = input.previousElementSibling;

                if (currentInput.value.length > 1) {
                    currentInput.value = "";
                    return;
                }

                if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                    nextInput.removeAttribute("disabled");
                    nextInput.focus();
                }


                if (e.key === "Backspace") {
                    inputs.forEach((input, index2) => {
                        if (index1 <= index2 && previousInput) {
                            input.setAttribute("disabled", true);
                            currentInput.value = "";
                            previousInput.value = "";
                            previousInput.focus();
                        }
                    });
                }

                if (!inputs[5].disabled && !inputs[5].value == "") {
                    button.classList.add(`${styles.active}`);
                    return;
                }
                button.classList.remove(`${styles.active}`);
            });
        });

        window.addEventListener("load", () => inputs[0].focus());
    }

    function toggleOff() {

        var popup = document.getElementById('popup');
        popup.classList.remove(`${styles.popped}`);

        var dimmer = document.getElementById('dimmer');
        dimmer.classList.remove(`${styles.dim}`);
    }


    function showPassword() {
        var x = document.getElementById("myPassword");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }


    return (
        <>

        <div className={styles.theModal} id="popup">
            <button className={styles.close} onClick={() => toggleOff()}>
                <img src={getImageUrl("icons/darkClose.png")} alt="" />
            </button>
            
            <h2>Verify Phone Number</h2>
            <p>A 6 digit OTP has been sent to <span>08068574297</span>. Input code to continue.</p>

            <form className={styles.modalForm} action="">
                <div className={styles.inputField}>
                    <input id="password" type="password" />
                    <input id="password" type="password" disabled />
                    <input id="password" type="password" disabled />
                    <input id="password" type="password" disabled />
                    <input id="password" type="password" disabled />
                    <input id="password" type="password" disabled />
                </div>

                <a className={styles.resend} href="">Resend code now</a>

            </form>

            <a className={styles.button} id="continue" onClick={() => toggleOff()} href="">Continue</a>            
        </div>

        <div className={styles.dimmer} id="dimmer"></div>

        <div className={styles.whole}>

            <div className={styles.text}>
                <ul>
                    <li className={styles.item}>
                        <img src={getImageUrl("icons/check.png")} />
                        <div className={styles.itemText} >
                            <h5>Protect yourself from fraudulent online transactions</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit neque sapien et senectus in ornare arcu. </p>
                        </div>
                    </li>

                    <li className={styles.item}>
                        <img src={getImageUrl("icons/check.png")} />
                        <div className={styles.itemText} >
                            <h5>Create and join transactions with ease</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit neque sapien et senectus in ornare arcu. </p>
                        </div>
                    </li>

                    <li className={styles.item}>
                        <img src={getImageUrl("icons/check.png")} />
                        <div className={styles.itemText} >
                            <h5>Ensure what you ordered for is what you get</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit neque sapien et senectus in ornare arcu. </p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className={styles.container}>
                <img src={getImageUrl("logos/darkKPLogo.png")} alt="kuleanpay" />
                <h2>Create a Kuleanpay Account</h2>

                <form className={styles.inputForm} action="">
                    <div className={styles.numberFormGroup}>
                        <label for="number">Phone Number</label>
                        <div className={styles.phoneNumber}>

                            <select name="countryCode" >
                                <option value="+234">+234</option>
                                <option value="+233">+233</option>
                                <option value="+1">+1</option>
                                <option value="+44">+44</option>
                            </select>
                            <input type="tel" name="number" />

                        </div>
                    </div>

                    <div className={styles.passwordFormGroup}>
                        <label for="password">Password</label>
                        <div className={styles.passwordDiv}>
                            <input type="password" name="password" id="myPassword"  />
                            <button onClick={() => showPassword()} type="button">
                                <img src={getImageUrl("icons/view.png")} alt="view" />
                            </button>
                        </div>
                    </div>

                    <div className={styles.codeFormGroup}>
                        <label htmlFor="code">Referral Code (Optional)</label>
                        <input type="text" name="code" />
                    </div>

                    <div className={styles.agree} >
                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox">I have read and agreed to the <a href="">Terms of use</a> and <a href="">privacy policy.</a></label>
                    </div>

                    {/* <button type="button" className={styles.create}><Verification/></button> */}
                    <button type="button" className={styles.create} onClick={() => toggle()} >Create Account</button>

                </form>

                <p>I have an account. <a href="/login">Sign In</a></p>

            </div>
        </div>
        </>
    )
}

//  onClick={() => setModalOpen(!modalOpen)}