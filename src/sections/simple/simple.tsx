import {Component} from "react"
import styles from "./simple.module.css"

interface Props {}
export class Simple extends Component<Props, {}> {
  render() {
    return <section className={styles.root}></section>
  }
}
