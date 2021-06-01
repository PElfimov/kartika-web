import {Component} from "react"
import styles from "./capture_form.module.css"

interface Props {}
export class CaptureForm extends Component<Props, {}> {
  render() {
    return (
      <form className={styles.root}>
        <fieldset className={styles.inner}>
          <legend className={styles.title}>
            <h2>Оставьте заявку</h2>
            <p>и получите скидку до 70% прямо сейчас!</p>
          </legend>
          <input className={styles.input} id="user-name" type="text" name="user-name" placeholder="Ваше имя" required />
          <label htmlFor="user-name" className={`${styles.textHidden} ${styles.icons} ${styles.iconsUser}`}>
            Ваше имя
          </label>
          <input
            className={styles.input}
            id="phone-number"
            type="tel"
            name="phone-number"
            placeholder="Номер телефона"
            required
          />
          <label htmlFor="phone-number" className={`${styles.textHidden} ${styles.icons} ${styles.iconsPhone}`}>
            Номер телефона
          </label>
          <input
            className={styles.input}
            id="user-mail"
            type="email"
            name="user-mail"
            placeholder="Электронная почта"
            required
          />
          <label htmlFor="user-mail" className={`${styles.textHidden} ${styles.icons} ${styles.iconsMail}`}>
            Электронная почта
          </label>
          <input
            className={styles.checkboxInput}
            type="checkbox"
            name="check-politik"
            value="enabled"
            id="form-capture__checkbox"
            required
          />
          <label className={styles.checkbox} htmlFor="form-capture__checkbox">
            <p className={styles.text}>
              Я соглашаюсь на передачу персональных данных согласно{" "}
              <a
                className={`${styles.text} ${styles.textLink}`}
                href="https://152фз.рф/get_terms/e7891dca8b038199ca96b7c656d599f9">
                пользовательскому соглашению
              </a>{" "}
              и{" "}
              <a
                className={`${styles.text} ${styles.textLink}`}
                href="https://152фз.рф/get_prv/e7891dca8b038199ca96b7c656d599f9">
                политике конфиденциальности
              </a>{" "}
              данного сайта
            </p>
          </label>
          <button className={styles.btn} type="submit">
            Получить бесплатный дизайн-макет
          </button>
        </fieldset>
      </form>
    )
  }
}
