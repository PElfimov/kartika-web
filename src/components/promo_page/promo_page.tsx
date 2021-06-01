import {Component} from "react"
import {Timer} from "./parts/timer"
import styles from "./promo_page.module.css"

interface Props {}
export class PromoPage extends Component<Props, {}> {
  private timeTo: number = 240000000

  render() {
    return (
      <section className={styles.root}>
        <div>
          <div className={styles.title}>
            <h2 className={styles.textHidden}>Специальная акция типографии "Картика"</h2>
            <b id="promo-page">Только 3 дня!</b>
            <p>
              при заказе карт вы получите дизайн-макет<span>в подарок</span>
            </p>
          </div>
          <Timer timeTo={this.timeTo} />
        </div>
        <form className="promo-page__form form-capture">
          <fieldset className="form-capture__inner">
            <legend className="form-capture__title">
              <h2>Оставьте заявку</h2>
              <p>и получите скидку до 70% прямо сейчас!</p>
            </legend>
            <input
              className="form-capture__input"
              id="user-name"
              type="text"
              name="user-name"
              placeholder="Ваше имя"
              required
            />
            <label
              htmlFor="user-name"
              className="form-capture__text-hidden form-capture__icons form-capture__icons--user">
              Ваше имя
            </label>
            <input
              className="form-capture__input"
              id="phone-number"
              type="tel"
              name="phone-number"
              placeholder="Номер телефона"
              required
            />
            <label
              htmlFor="phone-number"
              className="form-capture__text-hidden form-capture__icons form-capture__icons--phone-number">
              Номер телефона
            </label>
            <input
              className="form-capture__input"
              id="user-mail"
              type="email"
              name="user-mail"
              placeholder="Электронная почта"
              required
            />
            <label
              htmlFor="user-mail"
              className="form-capture__text-hidden form-capture__icons form-capture__icons--user-mail">
              Электронная почта
            </label>
            <input
              className="form-capture__checkbox-input"
              type="checkbox"
              name="check-politik"
              value="enabled"
              id="form-capture__checkbox"
              required
            />
            <label className="form-capture__checkbox" htmlFor="form-capture__checkbox">
              <p className="form-capture__text form-capture__text--checkbox">
                Я соглашаюсь на передачу персональных данных согласно
                <a
                  className="form-capture__text form-capture__text--link"
                  href="https://152фз.рф/get_terms/e7891dca8b038199ca96b7c656d599f9">
                  пользовательскому соглашению
                </a>
                и
                <a
                  className="form-capture__text form-capture__text--link"
                  href="https://152фз.рф/get_prv/e7891dca8b038199ca96b7c656d599f9">
                  политике конфиденциальности
                </a>
                данного сайта
              </p>
            </label>
            <button className="btn form-capture__btn" type="submit">
              Получить бесплатный дизайн-макет
            </button>
          </fieldset>
        </form>
      </section>
    )
  }
}
