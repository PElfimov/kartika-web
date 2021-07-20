import {Component} from "react"
import styles from "./footer.module.css"

interface Props {}
export class Footer extends Component<Props, {}> {
  render() {
    politic()
    return (
      <footer className={styles.root}>
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

function politic() {
  const script = document.createElement("script")
  script.type = "text/javascript"
  script.async = true
  script.charset = "utf-8"
  script.src = "https://152фз.рф/widget/e7891dca8b038199ca96b7c656d599f9"
  document.getElementsByTagName("head")[0].appendChild(script)
  console.log(script)
}
