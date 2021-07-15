import {Component} from "react"
import styles from "./order.module.css"

interface Props {}
export class Order extends Component<Props, {}> {
  render() {
    return <section className={styles.root}></section>
  }
}
