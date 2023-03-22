import './form-input.styles.scss'

const FormInput = ({
  label,
  onChange,
  value,
  type = 'text',
  placeholder,
  name,
  required = false,
  className = '',
}: {
  label: string
  onChange: (event: { target: { name: any; value: any } }) => void
  value: string
  type?: string
  placeholder?: string
  name: string
  required?: boolean
  className?: string
}) => {
  return (
    <div className="group">
      {label && (
        <label
          className={`${
            value.length ? 'shrink' : ''
          } form-input-label ${className}`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        className="form-input"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  )
}

export default FormInput
