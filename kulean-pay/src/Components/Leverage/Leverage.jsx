import React from "react";

import styles from "./Leverage.module.css"
import { getImageUrl } from "../../utils";

export const Leverage = () => {
    return <div className={styles.Leverage}>
        <div className={styles.bread}>
            <h5>PARTNER WITH KULEANPAY</h5>
            <h1>We are just a button away from you. Leverage our always
                world class support team who will attend to all your needs within seconds
            </h1>
        </div>
        
        <div className={styles.formWrapper}>
            <form>

                <div className={styles.form}>
                    <div className={styles.formGroup}>
                        <label for="name">Full Name</label>
                        <input type="text" name="name" />
                    </div>

                    <div className={styles.formGroup}>
                        <label for="email">Email Address</label>
                        <input type="email" name="email" />
                    </div>

                    <div className={styles.formGroup}>
                        <label for="number">Phone Number</label>
                        <input type="text" name="number" />
                    </div>

                    <div className={styles.formGroup}>
                        <label for="company">Company</label>
                        <input type="text" name="company" />
                    </div>

                    <div className={styles.formGroup}>
                        <label for="position">Position</label>
                        <input type="text" name="position" />
                    </div>

                    <div className={styles.formGroup}>
                        <label for="country">Country</label>
                        <select name="" id="">
                            <option value="" selected>Choose country</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Ghana">Ghana</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                        </select>
                    </div>

                    <div className={styles.formGroup}>
                        <label for="industry">Industry</label>
                        <input type="text" name="industry" />
                    </div>

                    <div className={styles.formGroup}>
                        <label for="websiteURL">Website URL</label>
                        <input type="text" name="websiteURL" />
                    </div>
                </div>
                

                <div className={styles.formGroup}>
                    <label for="message">Message</label>
                    <textarea placeholder="Type message here" name="message" />
                </div>

                <div className={styles.checkbox}>
                    <input value="upToDate" type="checkbox"/>
                    <label for="upToDate">I want to stay up to date</label>
                </div>
            </form>

            <div className={styles.button}>
                <button>
                    Submit
                    <img src={getImageUrl("icons/whiteRightArrow.png")} />
                </button>
            </div>
        </div>
    </div>
}