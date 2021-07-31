import styles from "./button.module.css"

interface Props {
  onClick: (e?: any) => void
  text: string
  disabled?: boolean
}

export function Button({text, disabled, onClick}: Props) {
  const onClickButton = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    onClick(event)
  }
  return (
    <button className={styles.root} disabled={disabled} type="button" onClick={onClickButton}>
      {text}
    </button>
  )
}
