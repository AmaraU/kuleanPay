import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { BlueBanner } from "../../Components/BlueBanner/BlueBanner";
import { Join } from "../../Components/Join/Join";
import { Footer } from "../../Components/Footer/Footer";
import { Partner } from "../../Components/Partner/Partner";
import { Benefit } from "../../Components/Benefit/Benefit";
import { Leverage } from "../../Components/Leverage/Leverage";

export const PartnerPage = () => {
    return (
        <div>
            <Navbar />
            <Partner/>
            <Benefit/>
            <Leverage/>
            <BlueBanner />
            <Join />
            <Footer />
        </div>
    )
}