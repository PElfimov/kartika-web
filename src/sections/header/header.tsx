import {Component} from "react"
import logo from "./parts/img/karticalogo.png"
import styles from "./header.module.css"
import {Btn} from "./parts/btn/btn"
import {RequestACall} from "../../components/popups/request_a_call/request_a_call"
import {observer} from "mobx-react"
import {action, makeObservable, observable} from "mobx"
import {Model} from "../../Model"

interface Props {
  model: Model
}

@observer
export class Header extends Component<Props, {}> {
  constructor(props: any) {
    super(props)
    makeObservable(this)
  }

  @observable
  private popupIsVisible: boolean = true

  @action.bound
  onClickOpen() {
    this.popupIsVisible = true
  }

  @action.bound
  onClickClose() {
    this.popupIsVisible = false
  }

  render() {
    const {model} = this.props
    return (
      <header>
        <div className={styles.inner}>
          {this.popupIsVisible && <RequestACall model={model} onClick={this.onClickClose} />}
          <section className={styles.logo}>
            <h1>
              <span className={styles.logoText}>
                Типография "Картика"<br></br>
              </span>
              <a>
                <img src={logo} width="274" height="77" alt="Логотип типографии «Картика»" />
              </a>
            </h1>
            <p className={styles.tagline}>Производство пластиковых карт для вашего бизнеса</p>
          </section>
          <section className={styles.contact}>
            <p>
              <a className={styles.phoneNumber} href="tel:+73852226824">
                +7 (3852) 226-824
              </a>
            </p>
            <p className={styles.contactText}>Ждем ваших звонков!</p>
            <p>
              <Btn onClick={this.onClickOpen} />
            </p>
          </section>
        </div>
      </header>
    )
  }
}
