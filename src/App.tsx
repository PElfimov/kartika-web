import React from "react"
import styles from "./App.module.css"
import {Header} from "./components/Header/Header"

const App = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias veniam, vel ipsam est consectetur
                inventore. Dolorem aut minima excepturi beatae!
            </main>
        </div>
    )
}

export default App
