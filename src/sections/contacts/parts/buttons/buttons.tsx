import {Component} from "react"
import styles from "./buttons.module.css"

type Item = {name: `vk` | `insta` | `ok` | `fb`; link: string; text: string}

const item: Item[] = [
  {
    name: "vk",
    link: "http://vk.com/t_kartika",
    text: "Наша страничка В Контакте"
  },
  {
    name: "insta",
    link: "https://www.instagram.com/brn_kartika",
    text: "Наша страничка Инстаграмм"
  },
  {
    name: "ok",
    link: "http://ok.ru/kartika",
    text: "Наша страничка Онокласники"
  },
  {
    name: "fb",
    link: "https://www.facebook.com/kartika.barnaul",
    text: "Наша страничка Фейсбук"
  }
]

interface Props {}
export class Buttons extends Component<Props, {}> {
  render() {
    return (
      <div className={styles.root}>
        <span className={styles.text}>Мы в социальных сетях</span>
        <ul className={styles.list}>
          {item.map((item, index) => {
            return (
              <li key={`${index}-${item.name}`} className={`${styles.item} ${styles[item.name]}`}>
                <a href={item.link} target="_blank">
                  <span className={styles.hidden}>{item.text}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
