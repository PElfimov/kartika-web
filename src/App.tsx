import React from "react"
import styles from "./app.module.css"
import {CapturePage} from "./components/capture_page"
import {Header} from "./components/header"

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <CapturePage />
      </main>
    </div>
  )
}

export default App
