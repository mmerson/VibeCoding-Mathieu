import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center font-semibold',
  {
    variants: {
      variant: {
        brand: 'bg-[#fff2f9] text-[#ec008c]',
        brandSolid: 'bg-[#ec008c] text-white',
        success: 'bg-[#e6f7ec] text-[#0f9f40]',
        error: 'bg-[#ffecec] text-[#dd1f29]',
        warning: 'bg-[#fff8ec] text-[#f5a623]',
        info: 'bg-[#edf2ff] text-[#0c4df0]',
        neutral: 'bg-[#f5f5f6] text-[#69696f]',
        discount: 'bg-[#ec008c] text-white',
        brandOutline: 'border border-[#ec008c] text-[#ec008c] bg-transparent',
        neutralOutline: 'border border-[#e0e0e3] text-[#69696f] bg-transparent',
      },
      size: {
        sm: 'text-[10px] px-1.5 py-0.5',
        md: 'text-[11px] px-2 py-0.5',
      },
      rounded: {
        sm: 'rounded-[4px]',
        full: 'rounded-full',
      },
    },
    defaultVariants: { variant: 'brand', size: 'md', rounded: 'full' },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, rounded, ...props }, ref) => (
    <span ref={ref} className={cn(badgeVariants({ variant, size, rounded }), className)} {...props} />
  )
)
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
