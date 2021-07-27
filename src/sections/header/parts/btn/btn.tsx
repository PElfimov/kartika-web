import {Component} from "react"
import styles from "./btn.module.css"

interface Props {
  onClick: (e?: any) => void
}
export class Btn extends Component<Props, {}> {
  private onClick(event: any) {
    const {onClick} = this.props
    event.preventDefault()
    event.stopPropagation()
    onClick(event)
  }

  render() {
    return (
      <button type="button" className={styles.btn} onClick={this.onClick.bind(this)}>
        Заказать звонок
      </button>
    )
  }
}
