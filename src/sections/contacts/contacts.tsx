import {Component} from "react"
import styles from "./contacts.module.css"
import {Buttons} from "./parts/buttons"

interface Props {}
export class Contacts extends Component<Props, {}> {
  render() {
    return (
      <section>
        <div className={styles.root}>
          <h2 className={styles.title}>Контакты</h2>
          <p className={styles.tel}>
            <a href="tel:+73852226824">
              <span>телефон:</span> +7-3852-226824
            </a>
          </p>
          <p className={styles.mail}>
            <a href="mailto:info@t-kartika.ru">
              <span>e-mail:</span> info@t-kartika.ru
            </a>
          </p>
          <Buttons />
        </div>
      </section>
    )
  }
}
