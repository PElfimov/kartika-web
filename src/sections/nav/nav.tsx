import {observer} from "mobx-react"
import {makeObservable, observable, computed, action} from "mobx"
import {Component} from "react"
import styles from "./nav.module.css"

type Item = {name: string; text: string; position: number}

interface Props {}

const item: Item[] = [
  {name: `promo`, text: `Акция`, position: 50},
  {name: `portfolio`, text: `Портфолио`, position: 50},
  {name: `catalog`, text: `Типы продукции`, position: 50},
  {name: `advantages`, text: `Преимущества`, position: 50},
  {name: `reviews`, text: `Отзывы`, position: 50},
  {name: `request`, text: `Заявка на расчет`, position: 50}
]

@observer
export class Nav extends Component<Props, {}> {
  @observable
  private fixedPosition: boolean = false

  constructor(props: any) {
    super(props)
    makeObservable(this)
  }

  @computed
  private get positionStyle() {
    let style: string = ` `
    if (this.fixedPosition) {
      style = styles.fixed
    }

    return style
  }

  render() {
    return (
      <nav className={`${styles.root} ${this.positionStyle}`}>
        <div className={styles.inner}>
          <h3 className={styles.textHidden}>Меню нашего сайта</h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="#promo-page">Акция</a>
            </li>
            <li className={styles.item}>
              <a href="#portfolio">Портфолио</a>
            </li>
            <li className={styles.item}>
              <a href="#catalog">Типы продукции</a>
            </li>
            <li className={styles.item}>
              <a href="#advantages">Преимущества</a>
            </li>
            <li className={styles.item}>
              <a href="#reviews">Отзывы</a>
            </li>
            <li className={styles.item}>
              <a href="#request-for-settleme">Заявка на расчет</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  @action
  handleScroll = () => {
    if (window.scrollY > 667) {
      this.fixedPosition = true
    } else this.fixedPosition = false
  }
}
