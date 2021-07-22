import {Component} from "react"
import {CaptureForm} from "./parts/capture_form"
import {Timer} from "./parts/timer"
import styles from "./promo_page.module.css"

interface Props {}
export class PromoPage extends Component<Props, {}> {
  private timeTo: number = 240000000

  render() {
    return (
      <section className={styles.root} id="promo-page">
        <div>
          <div className={styles.title}>
            <h2 className={styles.textHidden}>Специальная акция типографии "Картика"</h2>
            <b>Только 3 дня!</b>
            <p>
              при заказе карт вы получите дизайн-макет<span>в подарок</span>
            </p>
          </div>
          <Timer timeTo={this.timeTo} />
        </div>
        <CaptureForm />
      </section>
    )
  }
}
