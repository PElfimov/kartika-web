import {Component} from "react"
import styles from "./button.module.css"

interface Props {
  onClick: (e?: any) => void
  text: string
}

export class Button extends Component<Props, {}> {
  private onClick(event: any) {
    const {onClick} = this.props
    event.preventDefault()
    event.stopPropagation()
    onClick(event)
  }
  render() {
    const {text} = this.props
    return (
      <button className={styles.root} type="button" onClick={this.onClick.bind(this)}>
        {text}
      </button>
    )
  }
}
