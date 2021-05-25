import {Component} from "react"
import styles from "./disign_card_btn.module.css"

interface Props {}
export class DisignCardBtn extends Component<Props, {}> {
  render() {
    return (
      <a className={styles.root} href="#promo-page">
        <span>Хотите увидеть</span> дизайн вашей будущей карты?
      </a>
    )
  }
}
