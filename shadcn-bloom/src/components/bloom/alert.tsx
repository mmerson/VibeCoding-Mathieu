import * as React from 'react'
import { X, CheckCircle, AlertCircle, AlertTriangle, Info, Heart } from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative flex items-start gap-3 p-4 rounded-r-[4px] border-l-4',
  {
    variants: {
      variant: {
        brand: 'bg-[#fff2f9] border-[#ec008c]',
        success: 'bg-[#e6f7ec] border-[#0f9f40]',
        error: 'bg-[#ffecec] border-[#dd1f29]',
        warning: 'bg-[#fff8ec] border-[#f5a623]',
        info: 'bg-[#edf2ff] border-[#0c4df0]',
      },
    },
    defaultVariants: { variant: 'info' },
  }
)

const iconMap = {
  brand: Heart,
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
} as const

const iconColorMap = {
  brand: 'text-[#ec008c]',
  success: 'text-[#0f9f40]',
  error: 'text-[#dd1f29]',
  warning: 'text-[#f5a623]',
  info: 'text-[#0c4df0]',
} as const

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title?: string
  closeable?: boolean
  onClose?: () => void
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, children, closeable, onClose, ...props }, ref) => {
    const IconComponent = iconMap[variant ?? 'info']
    const iconColor = iconColorMap[variant ?? 'info']
    return (
      <div ref={ref} className={cn(alertVariants({ variant }), className)} {...props}>
        <IconComponent className={cn('h-5 w-5 flex-shrink-0 mt-0.5', iconColor)} />
        <div className="flex-1 min-w-0">
          {title && <p className="text-[13px] font-semibold text-[#31313a] mb-0.5">{title}</p>}
          {children && <p className="text-[13px] text-[#69696f]">{children}</p>}
        </div>
        {closeable && (
          <button
            onClick={onClose}
            className="flex-shrink-0 text-[#69696f] hover:text-[#31313a] focus:outline-none"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    )
  }
)
Alert.displayName = 'Alert'

export { Alert, alertVariants }
