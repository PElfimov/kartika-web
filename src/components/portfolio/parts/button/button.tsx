import {Component} from "react"
import styles from "./button.module.css"

interface Props {
  position: `left` | `right`
}
export class Button extends Component<Props, {}> {
  render() {
    const {position} = this.props
    return <button className={`${styles.root} ${styles[position]}`} type="button" disabled={true} />
  }
}
