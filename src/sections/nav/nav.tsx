import {observer} from "mobx-react"
import {makeObservable, observable, computed, action} from "mobx"
import {Component} from "react"
import {animateScroll as scroll} from "react-scroll"
import styles from "./nav.module.css"

type Item = {name: string; text: string; position: number}

interface Props {}

const item: Item[] = [
  {name: `promo`, text: `Акция`, position: 683},
  {name: `portfolio`, text: `Портфолио`, position: 3253},
  {name: `catalog`, text: `Типы продукции`, position: 1983},
  {name: `advantages`, text: `Преимущества`, position: 1283},
  {name: `reviews`, text: `Отзывы`, position: 3960},
  {name: `request`, text: `Заявка на расчет`, position: 7188}
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

  scrollTo(offset: number) {
    scroll.scrollTo(offset, {
      duration: 5
    })
  }

  render() {
    return (
      <nav className={`${styles.root} ${this.positionStyle}`}>
        <div className={styles.inner}>
          <h3 className={styles.textHidden}>Меню нашего сайта</h3>
          <ul className={styles.list}>
            {item.map((item, index) => {
              return (
                <li key={`${item.name}-${index}`} className={styles.item}>
                  <a
                    onClick={(event) => {
                      event.preventDefault()
                      event.stopPropagation()
                      this.scrollTo(item.position)
                    }}>
                    {item.text}
                  </a>
                </li>
              )
            })}
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
