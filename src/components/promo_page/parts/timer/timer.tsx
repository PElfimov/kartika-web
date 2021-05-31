import {Component} from "react"
import Countdown from "react-countdown"
import styles from "./timer.module.css"

interface Props {}

export class Timer extends Component<Props, {}> {
  render() {
    return <Countdown date={Date.now() + 200000000} renderer={HTML} />
  }
}

// type HTMLProps = {
//   days: number; hours: number; minutes: number; seconds: number
// };

function HTML({days, hours, minutes, seconds}: {days: number; hours: number; minutes: number; seconds: number}) {
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
