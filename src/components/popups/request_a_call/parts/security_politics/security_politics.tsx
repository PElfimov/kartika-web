import model from "../../../../../Model"
import styles from "./security_politics.module.css"

interface Props {
  checked: boolean
  onChange: (e?: any) => void
}

export function SecurityPolitics({onChange, checked}: Props) {
  let checkboxStyles: string = `${styles.checkbox} `
  if (model.securityPoliticsError) {
    checkboxStyles = checkboxStyles.concat(styles.error)
  }

  return (
    <label className={styles.root}>
      <input className={styles.input} type="checkbox" checked={checked} onChange={onChange} required={true} />
      <div className={checkboxStyles} />
      <p className={styles.text}>
        Я соглашаюсь на передачу персональных данных согласно {` `}
        <a
          className={`${styles.text} ${styles.link}`}
          href="https://152фз.рф/get_terms/e7891dca8b038199ca96b7c656d599f9">
          пользовательскому соглашению
        </a>{" "}
        и{` `}
        <a className={`${styles.text} ${styles.link}`} href="https://152фз.рф/get_prv/e7891dca8b038199ca96b7c656d599f9">
          политике конфиденциальности данного сайта
        </a>
      </p>
    </label>
  )
}
