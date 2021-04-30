import {Component} from "react"
import styles from "./btn.module.css"

interface Props {}
export class Btn extends Component<Props, {}> {
    public render() {
        return (
            <a className={styles.btn} href="requestcall.html">
                Заказать звонок
            </a>
        )
    }
}
