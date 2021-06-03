import {Component} from "react"
import styles from "./why_we.module.css"

interface Props {}
export class WhyWe extends Component<Props, {}> {
  render() {
    return (
      <section className="why-us-page" id="advantages">
        <div className="why-us-page__inner">
          <h2 className="why-us-page__title">ПОЧЕМУ ИМЕННО МЫ?</h2>
          <ul className="why-us-page__list">
            <li className="why-us-page__item why-us-page__item--free-shipping">
              <h3>Бесплатная доставка</h3>
              <p>мы осуществляем доставку абсолютно бесплатно во все города России</p>
            </li>
            <li className="why-us-page__item  why-us-page__item--quality-assurance">
              <h3>Гарантия качества</h3>
              <p>каждая карта соответствует международному стандарту качества ISO-7810</p>
            </li>
            <li className="why-us-page__item why-us-page__item--free-card">
              <h3>Бесплатная пробная карта</h3>
              <p>мы предоставляем бесплатную пробную карту до печати всего тиража</p>
            </li>
            <li className="why-us-page__item why-us-page__item--free-barcode">
              <h3>Штрих-код и нумерация бесплатно</h3>
              <p>мы бесплатно напечатаем штрих-код и индивидуальный номер (нумерацию)</p>
            </li>
            <li className="why-us-page__item why-us-page__item--return-guarantee">
              <h3>Гарантия возврата</h3>
              <p>если вас не устроит качество продукции, мы вернем вам деньги или переделаем заказ</p>
            </li>
            <li className="why-us-page__item why-us-page__item--scratch-resistant ">
              <h3>Нецарапающееся покрытие</h3>
              <p>специальное покрытие, которое позволяет карте долгое время сохранить свой первоначальный вид</p>
            </li>
            <li className="why-us-page__item why-us-page__item--lifetime-warranty">
              <h3>Пожизненная гарантия</h3>
              <p>мы уверены в качестве своих карт и поэтому предоставляем пожизненную гарантию</p>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}
