import * as React from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  helperText?: string
  errorText?: string
  error?: boolean
  options?: SelectOption[]
  placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, helperText, errorText, error, options, placeholder, required, id, disabled, ...props }, ref) => {
    const selectId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)
    const hasError = error || !!errorText

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <label htmlFor={selectId} className="text-[11px] font-semibold text-[#69696f] leading-none">
            {label}{required && <span className="text-[#ec008c] ml-0.5">*</span>}
          </label>
        )}
        <div className={cn(
          'relative flex items-center w-full rounded-[4px] border bg-white',
          'transition-colors focus-within:border-[#ec008c] focus-within:ring-1 focus-within:ring-[#ec008c]',
          hasError ? 'border-[#dd1f29] focus-within:border-[#dd1f29] focus-within:ring-[#dd1f29]' : 'border-[#e0e0e3]',
          disabled && 'bg-[#f5f5f6] opacity-60 cursor-not-allowed',
        )}>
          <select
            ref={ref}
            id={selectId}
            required={required}
            disabled={disabled}
            className={cn(
              'w-full h-11 px-3 pr-10 bg-transparent text-[13px] text-[#31313a]',
              'appearance-none outline-none border-none focus:outline-none focus:ring-0',
              'disabled:cursor-not-allowed',
              !props.value && !props.defaultValue && 'text-[#c9c9cc]',
              className,
            )}
            {...props}
          >
            {placeholder && <option value="" disabled>{placeholder}</option>}
            {options?.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 h-4 w-4 text-[#69696f] pointer-events-none flex-shrink-0" />
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
Select.displayName = 'Select'

export { Select }
