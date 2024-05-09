import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { BlueBanner } from "../Components/BlueBanner/BlueBanner";
import { Join } from "../Components/Join/Join";
import { Footer } from "../Components/Footer/Footer";
import { Digital } from "../Components/Digital/Digital";
import { Work } from "../Components/Work/Work";


export const BankingPage = () => {
    return (
        <div>
            <Navbar />
            <Digital/>
            <Work/>
            <BlueBanner />
            <Join />
            <Footer />
        </div>
    )
}