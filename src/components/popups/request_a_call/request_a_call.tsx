import {Component} from "react"
import ReactDOM from "react-dom"
import {Close} from "../../buttons/close"
import styles from "./request_a_call.module.css"
import {Button} from "../../buttons/button"
import {Input} from "./parts/input"
import {SecurityPolitics} from "./parts/security_politics"

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
        <h2 className={styles.title}>Оставить заявку</h2>
        <p className={styles.text}>Специалист нашей компании свяжется с вами, чтобы ответить на ваши вопросы!</p>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <fieldset className={styles.inputs}>
            <Input placeholder="Ваше имя" value="" onChange={() => {}} type="text" />
            <Input placeholder="Номер телефона" value="" onChange={() => {}} type="phone" />
            <Input placeholder="Электронная почта" value="" onChange={() => {}} type="mail" />
          </fieldset>
          <SecurityPolitics checked={false} onChange={() => {}} />
          <div className={styles.button}>
            <Button type={`submit`} text={`Закрыть`} onClick={() => {}} />
          </div>
        </form>
      </section>
    )

    return ReactDOM.createPortal(html, document.getElementById("appModal")!)
  }
}
