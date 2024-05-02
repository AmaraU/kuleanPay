import { EscrowHome } from "../Components/EscrowHome/EscrowHome";
import { EscrowHow } from "../Components/EscrowHow/EscrowHow";
import { Navbar } from "../Components/Navbar/Navbar";
import { BlueBanner } from "../Components/BlueBanner/BlueBanner";
import { Footer } from "../Components/Footer/Footer";
import { Join } from "../Components/Join/Join";


export const SolutionsEscrowPage = () => {
    return (
        <>
        <Navbar />
        <EscrowHome />
        <EscrowHow />
        <BlueBanner />
        <Join />
        <Footer />
        </>
    )
}