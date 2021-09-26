function Button({
  id,
  customButtonId,
  onClick,
  selectedPercentage,
  options
}: {
  id: number
  customButtonId: number
  onClick: any
  selectedPercentage: number
  options: number[]
}) {
  const classNames = `button 
    ${selectedPercentage === options[id] ? "button--selected" : ""} 
    ${id === customButtonId ? "button--light" : ""}`

  const description = id === customButtonId ? "Custom" : `${options[id]}%`

  return (
    <button id={`${id}`} className={classNames} onClick={onClick}>
      {description}
    </button>
  )
}

export default Button
