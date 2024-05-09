import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Escrow2 } from "../Components/Escrow2/Escrow2";
import { Transaction } from "../Components/Transaction/Transaction";
import { Bank2 } from "../Components/Bank2/Bank2";
import { BlueBanner } from "../Components/BlueBanner/BlueBanner";
import { Join } from "../Components/Join/Join";
import { Footer } from "../Components/Footer/Footer";

export const WhyKP = () => {
    return (
        <div>
            <Navbar />
            <Transaction />
            <Bank2 />
            <Escrow2 />
            <BlueBanner />
            <Join />
            <Footer />
        </div>
    )
}