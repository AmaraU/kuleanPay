import styles from "./App.module.css";
import { BankingPage } from "./Pages/BankingPage";
import { CompanyPage } from "./Pages/CompanyPage";
import { CreateAccount } from "./Pages/CreateAccount/CreateAccount";
import { HomePage } from "./Pages/HomePage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { PartnerPage } from "./Pages/PartnerPage";
import { resetPassword2 } from "./Pages/ResetPassword2/ResetPassword2";
import { SolutionsEscrowPage } from "./Pages/SolutionsEscrowPage";
import { SolutionsMerchantPage } from "./Pages/SolutionsMerchantPage";
import { WhyKP } from "./Pages/WhyKP";

function App() {

  let Component

  switch (window.location.pathname) {
    case "/":
      Component = HomePage
      break
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
    case "/login":
      Component = LoginPage
      break
    case "/resetPassword2":
      Component = resetPassword2
      break
    case "/createAccount":
      Component = CreateAccount
      break
  }

  return (
    <div className={styles.App}>
      <Component />
    </div>
  )
}

export default App