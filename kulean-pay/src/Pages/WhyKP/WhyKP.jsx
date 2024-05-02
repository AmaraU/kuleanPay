import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Escrow } from "../../Components/Escrow/Escrow";
import { Transaction } from "../../Components/Transaction/Transaction";
import { Bank } from "../../Components/Bank/Bank";
import { BlueBanner } from "../../Components/BlueBanner/BlueBanner";
import { Join } from "../../Components/Join/Join";
import { Footer } from "../../Components/Footer/Footer";

export const WhyKP = () => {
    return (
        <div>
            <Navbar />
            <Transaction />
            <Bank />
            <Escrow />
            <BlueBanner />
            <Join />
            <Footer />
        </div>
    )
}