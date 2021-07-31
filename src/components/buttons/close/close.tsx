import styles from "./close.module.css"

interface Props {
  onClick: (e?: any) => void
}

export function Close({onClick}: Props) {
  const onClickBtn = (event: any) => {
    event.preventDefault()
    event.stopPropagation()
    onClick(event)
  }

  return (
    <button className={styles.root} type="button" onClick={onClickBtn}>
      <svg
        width="35"
        height="35"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 28 28"
        xmlSpace="preserve">
        <g>
          <path d="M0,24l4,4l10-10l10,10l4-4L18,14L28,4l-4-4L14,10L4,0L0,4l10,10L0,24z" />
        </g>
      </svg>
    </button>
  )
}
