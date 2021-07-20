import {Component} from "react"
import styles from "./textarea.module.css"

interface Props {}
export class Textarea extends Component<Props, {}> {
  render() {
    return (
      <textarea
        className={styles.root}
        name="text-user"
        id="types-personalization-text-user"
        rows={8}
        cols={80}
        placeholder="Коментарий к заказу"></textarea>
    )
  }
}
