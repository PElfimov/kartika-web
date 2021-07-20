import {Component} from "react"
import styles from "./button.module.css"

interface Props {}
export class Button extends Component<Props, {}> {
  render() {
    return <input className={styles.root} type="submit" value="Расчитать стоимость " />
  }
}
