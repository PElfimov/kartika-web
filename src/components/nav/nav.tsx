import {Component} from "react"
import styles from "./nav.module.css"

interface Props {}
export class Nav extends Component<Props, {}> {
  render() {
    return (
      <nav className="main-navigation">
        <div className="main-navigation__inner">
          <h3 className="main-navigation__text-hidden">Меню нашего сайта</h3>
          <ul className="main-navigation__list">
            <li className="main-navigation__item">
              <a href="#promo-page">Акция</a>
            </li>
            <li className="main-navigation__item">
              <a href="#portfolio">Портфолио</a>
            </li>
            <li className="main-navigation__item">
              <a href="#catalog">Типы продукции</a>
            </li>
            <li className="main-navigation__item">
              <a href="#advantages">Преимущества</a>
            </li>
            <li className="main-navigation__item">
              <a href="#reviews">Отзывы</a>
            </li>
            <li className="main-navigation__item">
              <a href="#request-for-settleme">Заявка на расчет</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
