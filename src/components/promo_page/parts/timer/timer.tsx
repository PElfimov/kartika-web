import {Component} from "react"
import styles from "./timer.module.css"

interface Props {}
export class Timer extends Component<Props, {}> {
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.photo1}></div>
        <div className={styles.photo2}></div>
        <div className={styles.body}>
          <div className={styles.title}>До конца акции осталось:</div>
          <div className={styles.clock}>
            <div className={`${styles.clockNumber} ${styles.clockDay}`}>
              <p className={styles.lineUp}>
                <span id="days">0</span>
              </p>
              <p className={styles.lineDown}>дней</p>
            </div>
            <div className={styles.clockColon}>:</div>
            <div className={styles.clockNumber}>
              <p className={styles.lineUp}>
                <span id="hours">3</span>
              </p>
              <p className={styles.lineDown}>часов</p>
            </div>
            <div className={styles.clockColon}>:</div>
            <div className={styles.clockNumber}>
              <p className={styles.lineUp}>
                <span id="minutes">2</span>
              </p>
              <p className={styles.lineDown}>минут</p>
            </div>
            <div className={styles.clockColon}>:</div>
            <div className={styles.clockNumber}>
              <p className={styles.lineUp}>
                <span id="seconds">35</span>
              </p>
              <p className={styles.lineDown}>секунд</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
