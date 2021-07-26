import {Component} from "react"
import ReactDOM from "react-dom"
import {Close} from "../../buttons/close"
import styles from "./thanks.module.css"

interface Props {}

export class Thanks extends Component<Props, {}> {
  private element = document.getElementById("appModal")

  public componentDidMount() {
    this.element!.style.display = "flex"
  }

  public componentWillUnmount() {
    this.element!.style.display = "none"
  }

  public render() {
    let html = (
      <section className={styles.root}>
        <Close
          onClick={() => {
            console.log(`click to close`)
          }}
        />
        <h2 className={styles.title}>Спасибо!</h2>
        <p className={styles.text}>Ваша заявка принята!</p>
        <p className={styles.text}>Специалист компании свяжется с Вами в течение 20 минут.</p>
        <button className="btn btn--thanks-call" type="button">
          Закрыть
        </button>
      </section>
    )

    return ReactDOM.createPortal(html, document.getElementById("appModal")!)
  }
}
