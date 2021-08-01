import {Component} from "react"
import ReactDOM from "react-dom"
import {Close} from "../../buttons/close"
import styles from "./request_a_call.module.css"
import {Button} from "../../buttons/button"
import {Input} from "./parts/input"
import {SecurityPolitics} from "./parts/security_politics"
import model from "../../../Model"
import {observer} from "mobx-react"

interface Props {
  onClick: (e?: any) => void
}

@observer
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
        <h2 className={styles.title}>Оставить заявку</h2>
        <p className={styles.text}>Специалист нашей компании свяжется с вами, чтобы ответить на ваши вопросы!</p>
        <form className={styles.form}>
          <fieldset className={styles.inputs}>
            <Input
              placeholder="Ваше имя"
              value={model.user.name}
              onChange={model.getUserName}
              type="text"
              required={true}
              error={model.userError}
            />
            <Input
              placeholder="Номер телефона"
              value={model.user.tel}
              onChange={model.getUserPhone}
              type="phone"
              required={true}
              error={model.telError}
            />
            <Input
              placeholder="Электронная почта"
              value={model.user.mail}
              onChange={model.getUserMail}
              type="mail"
              required={true}
              error={model.mailError}
            />
          </fieldset>
          {model.errorMessage && (
            <div className={styles.errorMessage}>
              <p>{model.errorMessage}</p>
            </div>
          )}
          <SecurityPolitics checked={model.user.securityPolitics} onChange={model.getSecurityPolitics} />
          <div className={styles.button}>
            <Button type={`submit`} text={`Закрыть`} onClick={model.submit} />
          </div>
        </form>
      </section>
    )

    return ReactDOM.createPortal(html, document.getElementById("appModal")!)
  }
}
