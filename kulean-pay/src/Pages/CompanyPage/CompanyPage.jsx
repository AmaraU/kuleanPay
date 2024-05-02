import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { BlueBanner } from "../../Components/BlueBanner/BlueBanner";
import { Join } from "../../Components/Join/Join";
import { Footer } from "../../Components/Footer/Footer";
import { About } from "../../Components/About/About";
import { Product } from "../../Components/Product/Product";
import { Vision } from "../../Components/Vision/Vision";
import { Mission } from "../../Components/Mission/Mission";
import { Team } from "../../Components/Team/Team";

export const CompanyPage = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Product />
            <Vision />
            <Mission />
            <Team />
            <BlueBanner />
            <Join />
            <Footer />
        </div>
    )
}