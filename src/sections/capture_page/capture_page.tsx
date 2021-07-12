import {Component} from "react"
import styles from "./capture_page.module.css"
import {AdvantagesList} from "./parts/advantages_list"
import {DisignCardBtn} from "./parts/advantages_list/disign_card_btn/disign_card_btn"

interface Props {}
export class CapturePage extends Component<Props, {}> {
  render() {
    return (
      <section className={styles.root}>
        <div className={styles.inner}>
          <h2 className={styles.textHidden}>Преимущества работы с типографией "Картика"</h2>
          <AdvantagesList />
          <DisignCardBtn />
          <p className={styles.text}>Оставьте заявку и получите макет бесплатно</p>
        </div>
      </section>
    )
  }
}
