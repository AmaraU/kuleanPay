import styles from "./App.module.css";
import { Merchant } from "./Components/Merchant/Merchant";
import { HomePage } from "./Pages/HomePage";
import { SolutionsEscrowPage } from "./Pages/SolutionsEscrowPage";

function App() {

  return (
    <div className={styles.App}>
      <HomePage />
      {/* <SolutionsEscrowPage /> */}
    </div>
  )
}

export default App
