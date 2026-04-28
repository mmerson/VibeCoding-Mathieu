import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec008c] disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none',
  {
    variants: {
      variant: {
        brand: 'bg-[#ec008c] text-white hover:bg-[#d90082] active:bg-[#ab0067]',
        secondary: 'bg-[#f5f5f6] text-[#31313a] hover:bg-[#ebebec] active:bg-[#e3e3e5]',
        outline: 'border border-[#ec008c] text-[#ec008c] bg-transparent hover:bg-[#fff2f9] active:bg-[#f9d9eb]',
        ghost: 'text-[#ec008c] bg-transparent hover:bg-[#fff2f9] active:bg-[#f9d9eb]',
        destructive: 'bg-[#dd1f29] text-white hover:bg-[#b81c1e] active:bg-[#7f0b0c]',
        link: 'text-[#d90082] underline-offset-4 hover:underline bg-transparent',
        dark: 'bg-[#31313a] text-white hover:bg-[#464650] active:bg-[#52525a]',
      },
      size: {
        sm: 'h-8 px-3 text-[11px] rounded-[4px]',
        md: 'h-10 px-4 text-[13px] rounded-[4px]',
        lg: 'h-12 px-6 text-[14px] rounded-[4px]',
        icon: 'h-10 w-10 rounded-[4px]',
        'icon-sm': 'h-8 w-8 rounded-[4px]',
        'icon-lg': 'h-12 w-12 rounded-[4px]',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: { variant: 'brand', size: 'md' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, loading, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : leftIcon}
        {children}
        {!loading && rightIcon}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
