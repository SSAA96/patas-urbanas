import type { ButtonHTMLAttributes } from 'react'
import './Button.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

function Button({ children, className = '', type = 'button', variant = 'primary', ...props }: ButtonProps) {
  const buttonClassName = `button button--${variant} ${className}`.trim()

  return (
    <button className={buttonClassName} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
