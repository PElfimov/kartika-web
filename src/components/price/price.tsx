import {Component} from "react"
import styles from "./price.module.css"

interface Props {}
export class Price extends Component<Props, {}> {
  render() {
    return (
      <section className={styles.root}>
        <div className={styles.inner}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.name}>изготовление</p>
              <p className={styles.param}>от 1 дня</p>
            </li>
            <li className={styles.item}>
              <p className={styles.name}>цена за штуку</p>
              <p className={styles.param}>от 3,95 рублей</p>
            </li>
            <li className={styles.item}>
              <p className={styles.name}>изготовили более</p>
              <p className={styles.param}>1 000 000 карт</p>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
