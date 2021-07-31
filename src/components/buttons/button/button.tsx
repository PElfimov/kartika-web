import styles from "./button.module.css"

interface Props {
  onClick: (e?: any) => void
  text: string
  disabled?: boolean
  type?: `submit` | `button`
}

export function Button({text, disabled, onClick, type = "button"}: Props) {
  const onClickButton = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    onClick(event)
  }
  return (
    <button type={type} className={styles.root} disabled={disabled} onClick={onClickButton}>
      {text}
    </button>
  )
}
