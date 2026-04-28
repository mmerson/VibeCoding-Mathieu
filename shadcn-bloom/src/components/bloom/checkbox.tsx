'use client'
import * as React from 'react'
import { Check, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  indeterminate?: boolean
  error?: boolean
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, indeterminate, error, disabled, id, checked, ...props }, ref) => {
    const internalRef = React.useRef<HTMLInputElement>(null)
    const resolvedRef = (ref as React.RefObject<HTMLInputElement>) ?? internalRef
    const checkboxId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    React.useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate ?? false
      }
    }, [indeterminate, resolvedRef])

    const isChecked = checked || indeterminate

    return (
      <label
        htmlFor={checkboxId}
        className={cn(
          'inline-flex items-center gap-2 cursor-pointer select-none',
          disabled && 'opacity-50 cursor-not-allowed',
        )}
      >
        <span className="relative flex-shrink-0">
          <input
            ref={resolvedRef}
            type="checkbox"
            id={checkboxId}
            checked={checked}
            disabled={disabled}
            className="sr-only"
            {...props}
          />
          <span className={cn(
            'flex h-4 w-4 items-center justify-center rounded-[4px] border-2 transition-colors',
            isChecked
              ? 'bg-[#ec008c] border-[#ec008c]'
              : error
                ? 'bg-white border-[#dd1f29]'
                : 'bg-white border-[#e0e0e3] hover:border-[#ec008c]',
            className
          )}>
            {indeterminate ? (
              <Minus className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            ) : checked ? (
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
            ) : null}
          </span>
        </span>
        {label && <span className="text-[13px] text-[#31313a]">{label}</span>}
      </label>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export { Checkbox }
