import React from "react"
import styles from "./app.module.css"
import {CapturePage} from "./components/capture_page"
import {Header} from "./components/header"
import {Nav} from "./components/nav"

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <CapturePage />
        <Nav />
      </main>
    </div>
  )
}

export default App
