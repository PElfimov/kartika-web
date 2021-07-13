import {Component} from "react"
import styles from "./faq.module.css"
import {list} from "./list"

interface Props {}
export class Faq extends Component<Props, {}> {
  render() {
    return (
      <section className={styles.root}>
        <div className={styles.inner}>
          <form className={styles.form}>
            <fieldset className={styles.wrapper}>
              <legend className={styles.title}>Часто задаваемые вопросы</legend>
              {list.map((item, index) => {
                const labelTag = "faq"
                return (
                  <>
                    <label className={styles.question} htmlFor={`${labelTag} ${index}`}>
                      {`${index + 1}. ${item.question}`}
                    </label>
                    <input className={styles.radio} type="radio" name="radio-faq" id={`${labelTag} ${index}`} />
                    <p className={styles.answer}>{item.answer}</p>
                  </>
                )
              })}
            </fieldset>
          </form>
        </div>
      </section>
    )
  }
}
