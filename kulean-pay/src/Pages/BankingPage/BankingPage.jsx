import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { BlueBanner } from "../../Components/BlueBanner/BlueBanner";
import { Join } from "../../Components/Join/Join";
import { Footer } from "../../Components/Footer/Footer";
import { Digital } from "../../Components/Digital/Digital";
import { Work } from "../../Components/Work/Work";
import { Account } from "../../Components/Account/Account";
import { Money } from "../../Components/Money/Money";


export const BankingPage = () => {
    return (
        <div>
            <Navbar />
            <Digital/>
            <Work/>
            <Account/>
            <Money/>
            <BlueBanner />
            <Join />
            <Footer />
        </div>
    )
}