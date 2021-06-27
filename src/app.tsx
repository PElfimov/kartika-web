import React from "react"
import styles from "./app.module.css"
import {CapturePage} from "./components/capture_page"
import {Catalog} from "./components/catalog"
import {Header} from "./components/header"
import {Nav} from "./components/nav"
import {PromoPage} from "./components/promo_page"
import {WhyWe} from "./components/why_we"

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
      </main>
    </div>
  )
}

export default App
