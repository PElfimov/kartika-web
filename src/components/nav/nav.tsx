import {Component} from "react"
import styles from "./nav.module.css"

interface Props {}
export class Nav extends Component<Props, {}> {
  render() {
    return (
      <nav className={styles.root}>
        <div className={styles.inner}>
          <h3 className={styles.textHidden}>Меню нашего сайта</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#promo-page">Акция</a>
            </li>
            <li className={styles.item}>
              <a href="#portfolio">Портфолио</a>
            </li>
            <li className={styles.item}>
              <a href="#catalog">Типы продукции</a>
            </li>
            <li className={styles.item}>
              <a href="#advantages">Преимущества</a>
            </li>
            <li className={styles.item}>
              <a href="#reviews">Отзывы</a>
            </li>
            <li className={styles.item}>
              <a href="#request-for-settleme">Заявка на расчет</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
