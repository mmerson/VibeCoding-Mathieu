import * as React from 'react'
import { Loader2 } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const spinnerVariants = cva(
  'animate-spin',
  {
    variants: {
      size: {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-10 w-10',
      },
      variant: {
        brand: 'text-[#ec008c]',
        neutral: 'text-[#69696f]',
        white: 'text-white',
      },
    },
    defaultVariants: { size: 'md', variant: 'brand' },
  }
)

export interface SpinnerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {
  label?: string
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ className, size, variant, label, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('inline-flex flex-col items-center gap-2', className)} {...props}>
        <Loader2 className={cn(spinnerVariants({ size, variant }))} />
        {label && <span className="text-[11px] text-[#69696f]">{label}</span>}
      </div>
    )
  }
)
Spinner.displayName = 'Spinner'

export { Spinner, spinnerVariants }
