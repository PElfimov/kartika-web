import React from "react"
import styles from "./app.module.css"
import {CapturePage} from "./components/capture_page"
import {Catalog} from "./components/catalog"
import {FreeCardForm} from "./components/free_card_form"
import {Header} from "./components/header"
import {Nav} from "./components/nav"
import {PromoPage} from "./components/promo_page"
import {WhyWe} from "./components/why_we"
import {Portfolio} from "./components/portfolio"
import {Price} from "./components/price"
import {Reviews} from "./components/reviews"

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <CapturePage />
        <Nav />
        <PromoPage />
        <WhyWe />
        <Catalog />
        <FreeCardForm />
        <Portfolio />
        <Price />
        <Reviews />
      </main>
    </div>
  )
}

export default App
