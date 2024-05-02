import styles from "./App.module.css";
import { BankingPage } from "./Pages/BankingPage/BankingPage";
import { CompanyPage } from "./Pages/CompanyPage/CompanyPage";
import { HomePage } from "./Pages/HomePage";
import { PartnerPage } from "./Pages/PartnerPage/PartnerPage";
import { SolutionsEscrowPage } from "./Pages/SolutionsEscrowPage";
import { SolutionsMerchantPage } from "./Pages/SolutionsMerchantPage";
import { WhyKP } from "./Pages/WhyKP/WhyKP";

function App() {

  let Component

  switch (window.location.pathname) {
    case "/":
      Component = HomePage
    case "/whyKP":
      Component = WhyKP
      break
    case "/solutionsEscrow":
      Component = SolutionsEscrowPage
      break
    case "/solutionsDB":
      Component = BankingPage
      break
    case "/solutionsMerchant":
      Component = SolutionsMerchantPage
      break
    case "/partner":
      Component = PartnerPage
      break
    case "/company":
      Component = CompanyPage
      break
  }

  return (
    <div className={styles.App}>
      <Component />
    </div>
  )
}

export default App