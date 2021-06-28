import {Component} from "react"
import styles from "./free_card_form.module.css"

interface Props {}
export class FreeCardForm extends Component<Props, {}> {
  render() {
    return (
      <section className="order-free-card">
        <div className="order-free-card__inner">
          <form className="form-capture-free-card">
            <fieldset className="form-capture-free-card__inner">
              <legend className="form-capture-free-card__title">
                <h2>Заказать бесплатную карту</h2>
                <p>Оставьте заявку и получите пробную карту в ПОДАРОК!</p>
              </legend>
              <div className="form-capture-free-card__wrapper">
                <label className="form-capture-free-card__icons form-capture-free-card__icons--user">
                  <span className="form-capture-free-card__text-hidden">Ваше имя</span>
                  <input type="text" name="user-name" placeholder="Ваше имя" required />
                </label>
                <label className="form-capture-free-card__icons form-capture-free-card__icons--phone-number">
                  <span className="form-capture-free-card__text-hidden">Номер телефона</span>
                  <input type="tel" name="phone-number" placeholder="Номер телефона" required />
                </label>
                <label className="form-capture-free-card__icons form-capture-free-card__icons--user-mail">
                  <span className="form-capture-free-card__text-hidden">Электронная почта</span>
                  <input type="email" name="user-mail" placeholder="Электронная почта" required />
                </label>
              </div>
              <input
                className="form-capture-free-card__checkbox-input"
                type="checkbox"
                name="check-politik"
                value="enabled"
                id="form-capture-free-card__checkbox"
                required
              />
              <label className="form-capture-free-card__checkbox" htmlFor="form-capture-free-card__checkbox">
                <p className="form-capture-free-card__text form-capture-free-card__text--checkbox">
                  Я соглашаюсь на передачу персональных данных согласно
                  <a
                    className="form-capture-free-card__text form-capture-free-card__text--link"
                    href="https://152фз.рф/get_terms/e7891dca8b038199ca96b7c656d599f9">
                    пользовательскому соглашению
                  </a>
                  и
                  <a
                    className="form-capture-free-card__text form-capture-free-card__text--link"
                    href="https://152фз.рф/get_prv/e7891dca8b038199ca96b7c656d599f9">
                    политике конфиденциальности
                  </a>
                  данного сайта
                </p>
              </label>
              <button className="btn form-capture-free-card__btn" type="submit">
                Получить бесплатную карту
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    )
  }
}
