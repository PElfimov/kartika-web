import {action, makeObservable, observable} from "mobx"
import {observer} from "mobx-react"
import {Component} from "react"
import Countdown from "react-countdown"
import styles from "./timer.module.css"

interface Props {
  timeTo: number
}

@observer
export class Timer extends Component<Props, {}> {
  @observable
  private currentDate = Date.now()

  @observable
  private restartTimer: number = 1

  constructor(props: any) {
    super(props)
    makeObservable(this)
  }

  @action
  private onComplete() {
    this.currentDate = Date.now()
    this.restartTimer++
    localStorage.setItem("currentDate", String(this.currentDate))
  }

  get date() {
    const currentDate = Date.now()
    const date = localStorage.getItem("currentDate")
    if (date) {
      this.currentDate = +date
    }

    return this.currentDate
  }

  render() {
    const {timeTo} = this.props

    return (
      <Countdown
        key={this.restartTimer}
        date={this.date + timeTo}
        onComplete={this.onComplete.bind(this)}
        renderer={HTML}
      />
    )
  }

  componentDidMount() {
    localStorage.setItem("currentDate", String(this.currentDate))
  }
}

type HTMLProps = {
  days: number
  hours: number
  minutes: number
  seconds: number
  completed: boolean
}

function HTML({days, hours, minutes, seconds}: HTMLProps) {
  return (
    <div className={styles.root}>
      <div className={styles.photo1}></div>
      <div className={styles.photo2}></div>
      <div className={styles.body}>
        <div className={styles.title}>До конца акции осталось:</div>
        <div className={styles.clock}>
          <div className={`${styles.clockNumber} ${styles.clockDay}`}>
            <p className={styles.lineUp}>
              <span>{days}</span>
            </p>
            <p className={styles.lineDown}>дней</p>
          </div>
          <div className={styles.clockColon}>:</div>
          <div className={styles.clockNumber}>
            <p className={styles.lineUp}>
              <span>{hours}</span>
            </p>
            <p className={styles.lineDown}>часов</p>
          </div>
          <div className={styles.clockColon}>:</div>
          <div className={styles.clockNumber}>
            <p className={styles.lineUp}>
              <span>{minutes}</span>
            </p>
            <p className={styles.lineDown}>минут</p>
          </div>
          <div className={styles.clockColon}>:</div>
          <div className={styles.clockNumber}>
            <p className={styles.lineUp}>
              <span>{seconds}</span>
            </p>
            <p className={styles.lineDown}>секунд</p>
          </div>
        </div>
      </div>
    </div>
  )
}
