import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const pillVariants = cva(
  'inline-flex items-center gap-1.5 rounded-full font-medium transition-colors cursor-pointer select-none',
  {
    variants: {
      variant: {
        active: 'bg-[#ec008c] text-white',
        default: 'bg-[#f5f5f6] text-[#31313a] hover:bg-[#ebebec]',
        outline: 'border border-[#e0e0e3] text-[#31313a] bg-transparent hover:bg-[#f5f5f6]',
        ghost: 'text-[#ec008c] bg-transparent hover:bg-[#fff2f9]',
      },
      size: {
        sm: 'h-7 px-3 text-[11px]',
        md: 'h-8 px-4 text-[12px]',
      },
    },
    defaultVariants: { variant: 'default', size: 'md' },
  }
)

export interface PillProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> {
  label: string
  closeable?: boolean
  onClose?: () => void
  selected?: boolean
}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ className, variant, size, label, closeable, onClose, selected, ...props }, ref) => {
    const resolvedVariant = selected ? 'active' : variant
    return (
      <div
        ref={ref}
        className={cn(pillVariants({ variant: resolvedVariant, size }), className)}
        {...props}
      >
        <span>{label}</span>
        {closeable && (
          <button
            onClick={(e) => { e.stopPropagation(); onClose?.() }}
            className="flex-shrink-0 rounded-full hover:opacity-70 focus:outline-none"
            aria-label="Remove"
          >
            <X className="h-3 w-3" />
          </button>
        )}
      </div>
    )
  }
)
Pill.displayName = 'Pill'

export { Pill, pillVariants }
