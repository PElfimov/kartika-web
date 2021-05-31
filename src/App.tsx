import React from "react"
import styles from "./app.module.css"
import {CapturePage} from "./components/capture_page"
import {Header} from "./components/header"
import {Nav} from "./components/nav"
import {PromoPage} from "./components/promo_page"

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <CapturePage />
        <Nav />
        <PromoPage />
      </main>
    </div>
  )
}

export default App
