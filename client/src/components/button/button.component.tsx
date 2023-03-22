import { HTMLAttributes } from 'react'

import './button.styles.scss'

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button className={`button ${className}`} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
