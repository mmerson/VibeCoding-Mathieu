import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  errorText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, helperText, errorText, leftIcon, rightIcon, error, required, id, ...props }, ref) => {
    const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
    const hasError = error || !!errorText

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label htmlFor={inputId} className="text-[11px] font-semibold text-[#69696f] leading-none">
            {label}{required && <span className="text-[#ec008c] ml-0.5">*</span>}
          </label>
        )}
        <div className={cn(
          'flex items-center gap-2 w-full rounded-[4px] border bg-white px-3 py-0',
          'transition-colors focus-within:border-[#ec008c] focus-within:ring-1 focus-within:ring-[#ec008c]',
          hasError ? 'border-[#dd1f29] focus-within:border-[#dd1f29] focus-within:ring-[#dd1f29]' : 'border-[#e0e0e3]',
          props.disabled && 'bg-[#f5f5f6] opacity-60 cursor-not-allowed',
        )}>
          {leftIcon && <span className="text-[#69696f] flex-shrink-0">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            className={cn(
              'flex-1 h-11 bg-transparent text-[13px] text-[#31313a] placeholder:text-[#c9c9cc]',
              'outline-none border-none focus:outline-none focus:ring-0',
              'disabled:cursor-not-allowed',
              className,
            )}
            required={required}
            {...props}
          />
          {rightIcon && <span className="text-[#69696f] flex-shrink-0">{rightIcon}</span>}
        </div>
        {(helperText || errorText) && (
          <p className={cn('text-[11px] leading-tight', hasError ? 'text-[#dd1f29]' : 'text-[#69696f]')}>
            {errorText || helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
