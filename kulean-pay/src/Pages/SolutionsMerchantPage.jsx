import { BlueBanner } from "../Components/BlueBanner/BlueBanner"
import { Footer } from "../Components/Footer/Footer"
import { Join } from "../Components/Join/Join"
import { MerchantHome } from "../Components/MerchantHome/MerchantHome"
import { MerchantHow } from "../Components/MerchantHow/MerchantHow"
import { MerchantLink } from "../Components/MerchantLink/MerchantLink"
import { Navbar } from "../Components/Navbar/Navbar"

export const SolutionsMerchantPage = () => {

    return (
        <>
        <Navbar />
        <MerchantHome />
        <MerchantHow />
        <MerchantLink />
        <BlueBanner />
        <Join />
        <Footer />
        </>
    )
    
}