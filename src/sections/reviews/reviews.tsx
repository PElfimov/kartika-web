import {Component} from "react"
import styles from "./reviews.module.css"
import {list} from "./list"
import {observer} from "mobx-react"
import {action, observable, makeObservable, computed} from "mobx"
import {CarouselButton} from "../../components/buttons/сarousel_button"

const OFFSET = 890

interface Props {}
@observer
export class Reviews extends Component<Props, {}> {
  @observable
  private step: number = 0

  constructor(props: any) {
    super(props)
    makeObservable(this)
  }

  @computed
  get rightButtonVisible() {
    const sameTimeVisible = 2
    const maxOffset = (list.length / sameTimeVisible) * OFFSET
    let unvisitable: boolean = false

    if (maxOffset - this.step <= OFFSET) {
      unvisitable = true
    }
    return unvisitable
  }

  @computed
  get leftButtonVisible() {
    let unvisitable: boolean = true
    if (this.step > 0) {
      unvisitable = false
    }
    return unvisitable
  }

  @action
  private moveRight() {
    this.step = this.step + OFFSET
    console.log(this.step)
  }

  @action
  private moveLeft() {
    this.step = this.step - OFFSET
  }
  render() {
    return (
      <section className={styles.root} id="reviews">
        <h2 className={styles.title}>Отзывы наших клиентов</h2>
        <div className={styles.inner}>
          <CarouselButton
            position={`left`}
            onClick={() => {
              this.moveLeft()
            }}
            disabled={this.leftButtonVisible}
          />
          <div className={styles.wrapper}>
            <ul className={styles.list} style={{transform: `translateX(-${this.step}px)`, transition: `.6s transform`}}>
              {list.map((item, index) => {
                return (
                  <li className={styles.item} key={`${item.author} ${index}`}>
                    <p className={styles.text}>{item.review}</p>
                    <p className={styles.user} style={{}}>
                      {item.author}
                    </p>
                    <p className={styles.date}>{item.date}</p>
                  </li>
                )
              })}
            </ul>
          </div>
          <CarouselButton
            position={`right`}
            onClick={() => {
              this.moveRight()
            }}
            disabled={this.rightButtonVisible}
          />
        </div>
      </section>
    )
  }
}

// <li className="customer-reviews__item">
// <p className="customer-reviews__text">
//   Хорошая типография, заказывал листовки и скидочные карты, всё сделали быстро и качественно. Пожалел,
//   что визитки заказывал не здесь. Приятное и вежливое общение с персоналом, ребята профессионалы.
//   Рекомендую!
// </p>
// <p className="customer-reviews__user customer-reviews__user--automag">
//   Андрей, сеть магазинов «АВТОМАГ»
// </p>
// <p className="customer-reviews__date">25.08.2015</p>
// </li>
// <li className="customer-reviews__item">
// <p className="customer-reviews__text">
//   Выражаем благодарность всему коллективу типографии, и в частности Павлу Елфимову за отличную работу,
//   профессионализм и высокое качество продукции. Успехов и процветания!
// </p>
// <p className="customer-reviews__user customer-reviews__user--gooddoctor">Алла, КДЦ «Добрый доктор»</p>
// <p className="customer-reviews__date">01.10.2014</p>
// </li>
// <li className="customer-reviews__item">
// <p className="customer-reviews__text">
//   Заказывали карты для персонала, после года использования ни одна буква на карте не пострадала! Даже на
//   ленте ни одной царапины!!! Спасибо за качество!!!
// </p>
// <p className="customer-reviews__user customer-reviews__user--arabika">
//   Наталья, компания ООО «Арабика»
// </p>
// <p className="customer-reviews__date">10.09.2015</p>
// </li>
// <li className="customer-reviews__item">
// <p className="customer-reviews__text">
//   Карты понравились! Заказ был выполнен быстро. Цены тоже порадовали!
// </p>
// <p className="customer-reviews__user customer-reviews__user--mille">Наталья, «Mille fa Mille»</p>
// <p className="customer-reviews__date">29.06.2015</p>
// </li>
// <li className="customer-reviews__item">
// <p className="customer-reviews__text">
//   Огромная благодарность «Картике» за качество, сроки изготовления и отзывчивость на любую просьбу
//   клиента!
// </p>
// <p className="customer-reviews__user customer-reviews__user--sibir">
//   Ирина Васильевна, Гостиница «Сибирь»
// </p>
// <p className="customer-reviews__date">06.10.2014</p>
// </li>
