import {Component} from "react"
import styles from "./free_card_form.module.css"

interface Props {}
export class FreeCardForm extends Component<Props, {}> {
  render() {
    return (
      <section className={styles.root}>
        <div className={styles.wrapper}>
          <form className={styles.form}>
            <fieldset className={styles.inner}>
              <legend className={styles.title}>
                <h2>Заказать бесплатную карту</h2>
                <p>Оставьте заявку и получите пробную карту в ПОДАРОК!</p>
              </legend>
              <div className={styles.formWrapper}>
                <label className={`${styles.icon} ${styles.user}`}>
                  <span className={styles.textHidden}>Ваше имя</span>
                  <input type="text" name="user-name" placeholder="Ваше имя" required />
                </label>
                <label className={`${styles.icon} ${styles.phoneNumber}`}>
                  <span className={styles.textHidden}>Номер телефона</span>
                  <input type="tel" name="phone-number" placeholder="Номер телефона" required />
                </label>
                <label className={`${styles.icon} ${styles.mail}`}>
                  <span className={styles.textHidden}>Электронная почта</span>
                  <input type="email" name="user-mail" placeholder="Электронная почта" required />
                </label>
              </div>
              <input
                className={styles.checkBoxInput}
                type="checkbox"
                name="check-politik"
                value="enabled"
                id="form-capture-free-card__checkbox"
                required
              />
              <label className={styles.checkbox} htmlFor="form-capture-free-card__checkbox">
                <p className={styles.text}>
                  Я соглашаюсь на передачу персональных данных согласно{` `}
                  <a
                    className={`${styles.text} ${styles.link}`}
                    href="https://152фз.рф/get_terms/e7891dca8b038199ca96b7c656d599f9">
                    пользовательскому соглашению{` `}
                  </a>
                  и{` `}
                  <a
                    className={`${styles.text} ${styles.link}`}
                    href="https://152фз.рф/get_prv/e7891dca8b038199ca96b7c656d599f9">
                    политике конфиденциальности
                  </a>
                  {`  `}
                  данного сайта
                </p>
              </label>
              <button className={styles.btn} type="submit">
                Получить бесплатную карту
              </button>
            </fieldset>
          </form>
        </div>
      </section>
    )
  }
}
