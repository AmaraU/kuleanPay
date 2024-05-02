import styles from "./App.module.css";
import { HomePage } from "./Pages/HomePage";
import { SolutionsEscrowPage } from "./Pages/SolutionsEscrowPage";
import { SolutionsMerchantPage } from "./Pages/SolutionsMerchantPage";

function App() {

  let Component

  switch (window.location.pathname) {
    case "/":
      Component = HomePage
    case "/whyKP":
      break
    case "/solutionsEscrow":
      Component = SolutionsEscrowPage
      break
    case "/solutionsDB":
      break
    case "/solutionsMerchant":
      Component = SolutionsMerchantPage
      break
    case "/partner":
      break
    case "/company":
      break
    
  }

  return (
    <div className={styles.App}>
      <Component />
    </div>
  )
}

export default App
