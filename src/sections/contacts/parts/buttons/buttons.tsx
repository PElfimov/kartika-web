import {Component} from "react"
import styles from "./buttons.module.css"

interface Props {}
export class Buttons extends Component<Props, {}> {
  render() {
    return (
      <div className={styles.root}>
        <span className={styles.text}>Мы в социальных сетях</span>
        <ul className="cocial-btn__list">
          <li className="cocial-btn__item cocial-btn__item--vk">
            <a href="http://vk.com/t_kartika" target="_blank">
              <span className="cocial-btn__visually-hidden">Наша страничка В Контакте</span>
            </a>
          </li>
          <li className="cocial-btn__item cocial-btn__item--insta">
            <a href="https://www.instagram.com/brn_kartika" target="_blank">
              <span className="cocial-btn__visually-hidden">Наша страничка Инстаграмм</span>
            </a>
          </li>
          <li className="cocial-btn__item cocial-btn__item--ok">
            <a href="http://ok.ru/kartika" target="_blank">
              <span className="cocial-btn__visually-hidden">Наша страничка Онокласники</span>
            </a>
          </li>
          <li className="cocial-btn__item cocial-btn__item--fb" cocial-btn__item--fb>
            <a href="https://www.facebook.com/kartika.barnaul" target="_blank">
              <span className="cocial-btn__visually-hidden">Наша страничка Фейсбук</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
