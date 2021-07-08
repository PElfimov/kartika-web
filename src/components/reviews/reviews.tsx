import {Component} from "react"
import styles from "./reviews.module.css"

interface Props {}
export class Reviews extends Component<Props, {}> {
  render() {
    return (
      <section className="customer-reviews" id="reviews">
        <h2 className="customer-reviews__title">Отзывы наших клиентов</h2>
        <div className="customer-reviews__inner">
          <button className="btn-reviews btn-reviews--left" type="button"></button>
          <div className="customer-reviews__wrapper">
            <ul className="customer-reviews__list">
              <li className="customer-reviews__item">
                <p className="customer-reviews__text">
                  Каким бы ни был тираж - одна карта или тысячи, компания всегда работает профессионально - все
                  качественно и в срок. Надеемся на долгосрочное и эффективное сотрудничество.
                </p>
                <p className="customer-reviews__user customer-reviews__user--m2">Дарья, «Формула М2»</p>
                <p className="customer-reviews__date">04.06.2015</p>
              </li>
              <li className="customer-reviews__item">
                <p className="customer-reviews__text">
                  Хорошая типография, заказывал листовки и скидочные карты, всё сделали быстро и качественно. Пожалел,
                  что визитки заказывал не здесь. Приятное и вежливое общение с персоналом, ребята профессионалы.
                  Рекомендую!
                </p>
                <p className="customer-reviews__user customer-reviews__user--automag">
                  Андрей, сеть магазинов «АВТОМАГ»
                </p>
                <p className="customer-reviews__date">25.08.2015</p>
              </li>
              <li className="customer-reviews__item">
                <p className="customer-reviews__text">
                  Выражаем благодарность всему коллективу типографии, и в частности Павлу Елфимову за отличную работу,
                  профессионализм и высокое качество продукции. Успехов и процветания!
                </p>
                <p className="customer-reviews__user customer-reviews__user--gooddoctor">Алла, КДЦ «Добрый доктор»</p>
                <p className="customer-reviews__date">01.10.2014</p>
              </li>
              <li className="customer-reviews__item">
                <p className="customer-reviews__text">
                  Заказывали карты для персонала, после года использования ни одна буква на карте не пострадала! Даже на
                  ленте ни одной царапины!!! Спасибо за качество!!!
                </p>
                <p className="customer-reviews__user customer-reviews__user--arabika">
                  Наталья, компания ООО «Арабика»
                </p>
                <p className="customer-reviews__date">10.09.2015</p>
              </li>
              <li className="customer-reviews__item">
                <p className="customer-reviews__text">
                  Карты понравились! Заказ был выполнен быстро. Цены тоже порадовали!
                </p>
                <p className="customer-reviews__user customer-reviews__user--mille">Наталья, «Mille fa Mille»</p>
                <p className="customer-reviews__date">29.06.2015</p>
              </li>
              <li className="customer-reviews__item">
                <p className="customer-reviews__text">
                  Огромная благодарность «Картике» за качество, сроки изготовления и отзывчивость на любую просьбу
                  клиента!
                </p>
                <p className="customer-reviews__user customer-reviews__user--sibir">
                  Ирина Васильевна, Гостиница «Сибирь»
                </p>
                <p className="customer-reviews__date">06.10.2014</p>
              </li>
            </ul>
          </div>
          <button className="btn-reviews btn-reviews--right" type="button"></button>
        </div>
      </section>
    )
  }
}
