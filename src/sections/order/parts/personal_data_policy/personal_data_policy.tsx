import {Component} from "react"
import styles from "./personal_data_policy.module.css"

interface Props {}
export class PersonalDataPolicy extends Component<Props, {}> {
  render() {
    return (
      <>
        <input
          className={styles.input}
          type="checkbox"
          name="check-politik"
          value="enabled"
          id="leave-request-main__checkbox-input"
          required
        />
        <label className={styles.checkbox} htmlFor="leave-request-main__checkbox-input">
          <p className={styles.text}>
            Я соглашаюсь на передачу персональных данных согласно{" "}
            <a
              className={`${styles.text} ${styles.link}`}
              href="https://152фз.рф/get_terms/e7891dca8b038199ca96b7c656d599f9">
              пользовательскому соглашению{" "}
            </a>
            и{" "}
            <a
              className={`${styles.text} ${styles.link}`}
              href="https://152фз.рф/get_prv/e7891dca8b038199ca96b7c656d599f9">
              политике конфиденциальности
            </a>{" "}
            данного сайта
          </p>
        </label>
      </>
    )
  }
}
