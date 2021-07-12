import {Component} from "react"
import styles from "./portfolio.module.css"
import {Button} from "./parts/button/button"
import {list} from "./list"
import {observer} from "mobx-react"
import {action, observable, makeObservable, computed} from "mobx"

const OFFSET = 885

interface Props {}
@observer
export class Portfolio extends Component<Props, {}> {
  @observable
  private step: number = 0

  constructor(props: any) {
    super(props)
    makeObservable(this)
  }

  @computed
  get rightButtonVisible() {
    const maxOffset = (list.length / 3) * OFFSET
    let unvisitable: boolean = false

    if (maxOffset - this.step <= OFFSET) {
      unvisitable = true
    }
    return unvisitable
  }

  @computed
  get leftButtonVisible() {
    let unvisitable: boolean = true
    if (this.step > 0) {
      unvisitable = false
    }
    return unvisitable
  }

  @action
  private moveRight() {
    this.step = this.step + OFFSET
  }

  @action
  private moveLeft() {
    this.step = this.step - OFFSET
  }

  render() {
    return (
      <section id="portfolio" className={styles.root}>
        <h2 className={styles.title}>Портфолио</h2>
        <div className={styles.inner}>
          <Button
            position={`left`}
            onClick={() => {
              this.moveLeft()
            }}
            disabled={this.leftButtonVisible}
          />
          <div className={styles.wrapper}>
            <ul style={{transform: `translateX(-${this.step}px)`, transition: `.6s transform`}} className={styles.list}>
              {list.map((item) => {
                let imgUrl: string
                try {
                  imgUrl = require(`./parts/img/${item.fileName}.jpg`).default
                } catch (err) {
                  imgUrl = `${item.fileName}.jpg`
                  console.error(`${imgUrl} file not exist`)
                }

                return (
                  <li key={item.fileName} className={styles.item}>
                    <img src={imgUrl} alt={item.name} width="404" height="302" />
                  </li>
                )
              })}
            </ul>
          </div>
          <Button
            position={`right`}
            onClick={() => {
              this.moveRight()
            }}
            disabled={this.rightButtonVisible}
          />
        </div>
      </section>
    )
  }
}
