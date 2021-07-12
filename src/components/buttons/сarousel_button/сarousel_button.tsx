import {Component} from "react"
import styles from "./сarousel_button.module.css"

interface Props {
  position: `left` | `right`
  onClick: (e?: any) => void
  disabled?: boolean
}
export class CarouselButton extends Component<Props, {}> {
  private onClick(event: any) {
    const {onClick} = this.props
    event.preventDefault()
    event.stopPropagation()
    onClick(event)
  }

  render() {
    const {position, disabled} = this.props

    return (
      <button
        className={`${styles.root} ${styles[position]}`}
        type="button"
        onClick={this.onClick.bind(this)}
        disabled={disabled}
      />
    )
  }
}
