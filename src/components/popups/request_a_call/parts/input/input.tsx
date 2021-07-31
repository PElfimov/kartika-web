import styles from "./input.module.css"

type Type = `text` | `mail` | `phone`

interface Props {
  placeholder: string
  disabled?: boolean
  type: Type
  value: string
  onChange: (e?: any) => void
  required?: boolean
  error?: boolean
}

export function Input({placeholder, disabled, type, value = `text`, onChange, required = false, error = false}: Props) {
  let style: string = `${styles.input} `
  if (error) {
    style = style.concat(styles.error)
  }

  return (
    <div className={`${styles.root} ${styles[type]} `}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={style}
        disabled={disabled}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}
