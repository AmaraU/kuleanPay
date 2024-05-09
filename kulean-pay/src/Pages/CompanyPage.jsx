import React from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Join } from "../Components/Join/Join";
import { Footer } from "../Components/Footer/Footer";
import { About } from "../Components/About/About";
import { Product } from "../Components/Product/Product";
import { Vision } from "../Components/Vision/Vision";
import { BlueBanner } from "../Components/BlueBanner/BlueBanner";

export const CompanyPage = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Product />
            <Vision />
            <BlueBanner />
            <Join />
            <Footer />
        </div>
    )
}