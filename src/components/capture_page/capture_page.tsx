import {Component} from "react"
import styles from "./capture_page.module.css"

interface Props {}
export class CapturePage extends Component<Props, {}> {
  render() {
    return (
      <section className={styles.root}>
        <div className={styles.inner}>
          <h2 className={styles.textHidden}>Преимущества работы с типографией "Картика"</h2>
          <ul className="advantages-btn">
            <li className="advantages-btn__item advantages-btn__item--free-shipping">
              <a href="#free-shipping">Бесплатная доставка по РФ</a>
            </li>
            <li className="advantages-btn__item advantages-btn__item--lifetime-warranty">
              <a href="#lifetime-warranty">Пожизненная гарантия</a>
            </li>
            <li className="advantages-btn__item advantages-btn__item--indent-seal">
              <a href="#indent-seal">Индент печать</a>
            </li>
          </ul>
          <a className="disign-card-btn" href="#promo-page">
            <span>Хотите увидеть</span> дизайн вашей будущей карты?
          </a>
          <p className={styles.text}>Оставьте заявку и получите макет бесплатно</p>
        </div>
      </section>
    )
  }
}
