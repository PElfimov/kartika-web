import {Component} from "react"
import styles from "./Header.module.css"

interface Props {}
export class Header extends Component<Props, {}> {
    public render() {
        return (
            <header className={styles.header}>
                <div className="main-header__inner">
                    <section className="header-logo main-header__logo ">
                        <h1>
                            <span className="header-logo__logo-text">
                                Типография "Картика"<br></br>{" "}
                            </span>
                            <a className="header-logo">
                                <img
                                    src="img/karticalogo.png"
                                    width="274"
                                    height="77"
                                    alt="Логотип типографии «Картика»"
                                />
                            </a>
                        </h1>
                        <p className="header-logo__tagline">Производство пластиковых карт для вашего бизнеса</p>
                    </section>
                    <section className="main-header__contact">
                        <p>
                            <a className="main-header__contact-phonenomber" href="tel:+73852226824">
                                +7 (3852) 226-824
                            </a>
                        </p>
                        <p className="main-header__contact-text">Ждем ваших звонков!</p>
                        <p>
                            <a className="btn main-header__contact-btn" href="requestcall.html">
                                Заказать звонок
                            </a>
                        </p>
                    </section>
                </div>
            </header>
        )
    }
}
