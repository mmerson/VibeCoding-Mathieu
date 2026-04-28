import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical'
  variant?: 'default' | 'muted' | 'brand'
  label?: string
}

const variantColorMap = {
  default: 'bg-[#e0e0e3]',
  muted: 'bg-[#f5f5f6]',
  brand: 'bg-[#ec008c]',
}

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', variant = 'default', label, ...props }, ref) => {
    const colorClass = variantColorMap[variant]
    if (orientation === 'vertical') {
      return (
        <div
          ref={ref}
          className={cn('w-px h-full flex-shrink-0', colorClass, className)}
          role="separator"
          aria-orientation="vertical"
          {...props}
        />
      )
    }

    if (label) {
      return (
        <div ref={ref} className={cn('flex items-center gap-3 w-full', className)} role="separator" {...props}>
          <div className={cn('flex-1 h-px', colorClass)} />
          <span className="text-[11px] text-[#69696f] flex-shrink-0">{label}</span>
          <div className={cn('flex-1 h-px', colorClass)} />
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn('h-px w-full flex-shrink-0', colorClass, className)}
        role="separator"
        aria-orientation="horizontal"
        {...props}
      />
    )
  }
)
Separator.displayName = 'Separator'

export { Separator }
