import { Bank } from "../Components/Bank/Bank";
import { Escrow } from "../Components/Escrow/Escrow";
import { Footer } from "../Components/Footer/Footer";
import { Home } from "../Components/Home/Home";
import { BlueBanner } from "../Components/BlueBanner/BlueBanner";
import { Merchant } from "../Components/Merchant/Merchant";
import { Navbar } from "../Components/Navbar/Navbar";
import { Offers } from "../Components/Offers/Offers";
import { Join } from "../Components/Join/Join";

export const HomePage = () => {

  return (
    <>
      <Navbar />
      <Home />
      <Offers />
      <Escrow />
      <Bank />
      <Merchant />
      <BlueBanner />
      <Join />
      <Footer />
    </>
  )
}