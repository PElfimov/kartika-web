import {Component} from "react"

import styles from "./footer.module.css"
import {Thanks} from "../../components/popups/thanks"

interface Props {}
export class Footer extends Component<Props, {}> {
  render() {
    return (
      <footer className={styles.root}>
        <Thanks />
        <div className={styles.wrapper}>
          <div>
            <a>
              <img
                src={require(`./img/kartikalogosmall.png`).default}
                alt="Логотип типографии «Картика»"
                width={197}
                height={55}
              />
            </a>
          </div>
          <div className={styles.privacypolicy}>
            <div id="fz_wrap"></div>
            <p>Все права защищены|© Типография «КАРТИКА»</p>
          </div>
          <div>
            <p>Разработано</p>
          </div>
        </div>
      </footer>
    )
  }
}
