import {Component} from "react"
import styles from "./Header.module.css"
import {Btn} from "./parts/btn/btn"

interface Props {}
export class Header extends Component<Props, {}> {
    public render() {
        return (
            <header>
                <div className={styles.inner}>
                    <section className={styles.logo}>
                        <h1>
                            <span className={styles.logoText}>
                                Типография "Картика"<br></br>{" "}
                            </span>
                            <a>
                                <img
                                    src="img/karticalogo.png"
                                    width="274"
                                    height="77"
                                    alt="Логотип типографии «Картика»"
                                />
                            </a>
                        </h1>
                        <p className={styles.tagline}>Производство пластиковых карт для вашего бизнеса</p>
                    </section>
                    <section className={styles.contact}>
                        <p>
                            <a className={styles.phoneNumber} href="tel:+73852226824">
                                +7 (3852) 226-824
                            </a>
                        </p>
                        <p className={styles.contactText}>Ждем ваших звонков!</p>
                        <p>
                            <Btn />
                        </p>
                    </section>
                </div>
            </header>
        )
    }
}
