import {Component} from "react"
import styles from "./advantages_list.module.css"

interface Props {}
export class AdvantagesList extends Component<Props, {}> {
  render() {
    return (
      <ul className={styles.root}>
        <li className={`${styles.item} ${styles.shipping}`}>
          <a href="#free-shipping">Бесплатная доставка по РФ</a>
        </li>
        <li className={`${styles.item} ${styles.warranty}`}>
          <a href="#lifetime-warranty">Пожизненная гарантия</a>
        </li>
        <li className={`${styles.item} ${styles.indent}`}>
          <a href="#indent-seal">Индент печать</a>
        </li>
      </ul>
    )
  }
}
