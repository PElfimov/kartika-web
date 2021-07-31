import {Component} from "react"
import ReactDOM from "react-dom"
import {Close} from "../../buttons/close"
import styles from "./request_a_call.module.css"
import {Button} from "../../buttons/button"
import {Input} from "./parts/input"

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

  handleSubmit(event) {
    alert("Отправленное имя:")
    event.preventDefault()
  }

  public render() {
    const {onClick} = this.props
    let html = (
      <section className={styles.root}>
        <div className={styles.close}>
          <Close onClick={onClick} />
        </div>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <Input placeholder="Ваше имя" value="" onChange={() => {}} type="text" />
          <Input placeholder="Номер телефона" value="" onChange={() => {}} type="phone" />
          <Input placeholder="Электронная почта" value="" onChange={() => {}} type="mail" />

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
            <Button type={`submit`} text={`Закрыть`} onClick={() => {}} />
          </div>
        </form>
      </section>
    )

    return ReactDOM.createPortal(html, document.getElementById("appModal")!)
  }
}
