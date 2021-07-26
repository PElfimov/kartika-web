import {Component} from "react"
import ReactDOM from "react-dom"

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
        <button className="btn-close" type="button" name="close">
          {/* <svg
              width="35"
              height="35"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 28 28"
              style="enable-background:new 0 0 28 28;"
              xml:space="preserve">
              <g>
                <path d="M0,24l4,4l10-10l10,10l4-4L18,14L28,4l-4-4L14,10L4,0L0,4l10,10L0,24z" />
              </g>
            </svg> */}
        </button>
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
