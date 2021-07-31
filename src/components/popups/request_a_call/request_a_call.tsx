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

        <div className={styles.button}>
          <Button text={`Закрыть`} onClick={onClick} />
        </div>
      </section>
    )

    return ReactDOM.createPortal(html, document.getElementById("appModal")!)
  }
}
