'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  size?: 'sm' | 'md'
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, size = 'md', disabled, checked, defaultChecked, id, onChange, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked ?? false)
    const controlled = checked !== undefined
    const resolvedChecked = controlled ? checked : isChecked
    const switchId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!controlled) setIsChecked(e.target.checked)
      onChange?.(e)
    }

    return (
      <label
        htmlFor={switchId}
        className={cn(
          'inline-flex items-center gap-2 cursor-pointer select-none',
          disabled && 'opacity-50 cursor-not-allowed',
        )}
      >
        <span className="relative flex-shrink-0 inline-block">
          <input
            ref={ref}
            type="checkbox"
            role="switch"
            id={switchId}
            checked={resolvedChecked}
            disabled={disabled}
            onChange={handleChange}
            className="sr-only"
            {...props}
          />
          <span
            className={cn(
              'block rounded-full transition-colors duration-200',
              size === 'sm' ? 'w-8 h-5' : 'w-10 h-6',
              resolvedChecked ? 'bg-[#ec008c]' : 'bg-[#c9c9cc]',
              className
            )}
          >
            <span
              className={cn(
                'block rounded-full bg-white shadow transition-transform duration-200',
                size === 'sm'
                  ? cn('h-3.5 w-3.5 mt-[3px] ml-[3px]', resolvedChecked ? 'translate-x-3' : 'translate-x-0')
                  : cn('h-[18px] w-[18px] mt-[3px] ml-[3px]', resolvedChecked ? 'translate-x-4' : 'translate-x-0')
              )}
            />
          </span>
        </span>
        {label && <span className="text-[13px] text-[#31313a]">{label}</span>}
      </label>
    )
  }
)
Switch.displayName = 'Switch'

export { Switch }
