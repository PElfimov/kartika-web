import {Component} from "react"
import styles from "./capture_page.module.css"
import {AdvantagesList} from "./parts/advantages_list"

interface Props {}
export class CapturePage extends Component<Props, {}> {
  render() {
    return (
      <section className={styles.root}>
        <div className={styles.inner}>
          <h2 className={styles.textHidden}>Преимущества работы с типографией "Картика"</h2>
          <AdvantagesList />
          <a className="disign-card-btn" href="#promo-page">
            <span>Хотите увидеть</span> дизайн вашей будущей карты?
          </a>
          <p className={styles.text}>Оставьте заявку и получите макет бесплатно</p>
        </div>
      </section>
    )
  }
}
