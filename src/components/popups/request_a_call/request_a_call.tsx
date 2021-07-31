import {Component} from "react"
import ReactDOM from "react-dom"
import {Close} from "../../buttons/close"
import styles from "./request_a_call.module.css"
import {Button} from "../../buttons/button"

interface Props {
  onClick: (e?: any) => void
}

export class RequestACall extends Component<Props, {}> {
  private element = document.getElementById("appModal")

  public componentDidMount() {
    this.element!.style.display = "flex"
  }

  public componentWillUnmount() {
    this.element!.style.display = "none"
  }

  public render() {
    const {onClick} = this.props
    let html = (
      <section className={styles.root}>
        <div className={styles.close}>
          <Close onClick={onClick} />
        </div>
        <input id="request-call-user-name" type="text" name="user-name" placeholder="Ваше имя" required={true} />
        <label
          htmlFor="request-call-user-name"
          className="request-call__text-hidden request-call__icons request-call__icons--user">
          Ваше имя
        </label>
        <input
          id="request-call-phone-number"
          type="tel"
          name="phone-number"
          placeholder="Номер телефона"
          required={true}
        />
        <label
          htmlFor="request-call-phone-number"
          className="request-call__text-hidden request-call__icons request-call__icons--phone-number">
          Номер телефона
        </label>
        <input
          id="request-call-user-mail"
          type="email"
          name="user-mail"
          placeholder="Электронная почта"
          required={true}
        />
        <label
          htmlFor="request-call-user-mail"
          className="request-call__text-hidden request-call__icons request-call__icons--user-mail">
          Электронная почта
        </label>
        <input
          className="request-call__checkbox-input"
          type="checkbox"
          name="check-politik"
          value="enabled"
          id="request-call__checkbox"
          required={true}
        />
        <label className="request-call__checkbox" htmlFor="request-call__checkbox">
          <p className="request-call__text request-call__text--checkbox">
            Я соглашаюсь на передачу персональных данных согласно
            <a
              className="request-call__text request-call__text--link"
              href="https://152фз.рф/get_terms/e7891dca8b038199ca96b7c656d599f9">
              пользовательскому соглашению
            </a>{" "}
            и
            <a
              className="request-call__text request-call__text--link"
              href="https://152фз.рф/get_prv/e7891dca8b038199ca96b7c656d599f9">
              политике конфиденциальности данного сайта
            </a>
          </p>
        </label>

        <div className={styles.button}>
          <Button text={`Закрыть`} onClick={onClick} />
        </div>
      </section>
    )

    return ReactDOM.createPortal(html, document.getElementById("appModal")!)
  }
}
