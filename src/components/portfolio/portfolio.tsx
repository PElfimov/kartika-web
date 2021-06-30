import {Component} from "react"
import styles from "./portfolio.module.css"

interface Props {}
export class Portfolio extends Component<Props, {}> {
  render() {
    return <section className={styles.root} id="advantages"></section>
  }
}
