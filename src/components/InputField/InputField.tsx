import "./styles.css"

const getClassNames = (type: "people" | "bill", value: number) => {
  const baseClassname = `input-field--${type}`

  if (value === 0) {
    return `${baseClassname} input--empty`
  }

  return baseClassname
}

const isError = (value: number) => value === 0

function InputField({
  label,
  type,
  value,
  onChange
}: {
  label: string
  type: "people" | "bill"
  value: number
  onChange: any
}) {
  const classNames = getClassNames(type, value)
  const error = isError(value)

  return (
    <div className="container">
      <div className="label-container">
        <label htmlFor={type}>{label}</label>
        {error && <span className="error">Can't be zero</span>}
      </div>
      <input
        type="number"
        id={type}
        className={classNames}
        placeholder="0"
        value={value}
        pattern="^[0-9]*$"
        onChange={onChange}
      ></input>
    </div>
  )
}

export default InputField
