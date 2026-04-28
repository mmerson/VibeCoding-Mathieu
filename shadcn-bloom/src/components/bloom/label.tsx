import * as React from 'react'
import { cn } from '@/lib/utils'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, required, ...props }, ref) => (
    <label
      ref={ref}
      className={cn('text-[11px] font-semibold text-[#69696f] leading-none', className)}
      {...props}
    >
      {children}
      {required && <span className="text-[#ec008c] ml-0.5">*</span>}
    </label>
  )
)
Label.displayName = 'Label'

export { Label }
