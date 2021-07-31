import styles from "./input.module.css"

type Type = `text` | `mail` | `phone`

interface Props {
  placeholder: string
  disabled?: boolean
  type: Type
  value: string
  onChange: (e?: any) => void
}

export function Input({placeholder, disabled, type, value = `text`, onChange}: Props) {
  return (
    <div className={`${styles.root} ${styles[type]}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={styles.input}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  )
}
