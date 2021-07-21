import {Component} from "react"
import styles from "./contacts.module.css"

interface Props {}
export class Contacts extends Component<Props, {}> {
  render() {
    return (
      <section className="main-contacts">
        <div className="main-contacts__wrapper">
          <h2 className="main-contacts__title">Контакты</h2>
          <p className="main-contacts__tel">
            <a href="tel:+73852226824">
              <span>телефон:</span> +7-3852-226824
            </a>
          </p>
          <p className="main-contacts__mail">
            <a href="mailto:info@t-kartika.ru">
              <span>e-mail:</span> info@t-kartika.ru
            </a>
          </p>
          <div className="main-contacts__cocial cocial-btn">
            <span className="cocial-btn__text">Мы в социальных сетях</span>
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
        </div>
      </section>
    )
  }
}
