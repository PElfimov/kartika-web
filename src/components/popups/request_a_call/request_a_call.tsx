import {Component} from "react"
import ReactDOM from "react-dom"
import {Close} from "../../buttons/close"
import styles from "./request_a_call.module.css"
import {Button} from "../../buttons/button"

interface Props {}

export class RequestACall extends Component<Props, {}> {
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
        <div className={styles.close}>
          <Close
            onClick={() => {
              console.log(`click to close`)
            }}
          />
        </div>

        <div className={styles.button}>
          <Button
            text={`Закрыть`}
            onClick={() => {
              console.log(`click to close`)
            }}
          />
        </div>
      </section>
    )

    return ReactDOM.createPortal(html, document.getElementById("appModal")!)
  }
}
