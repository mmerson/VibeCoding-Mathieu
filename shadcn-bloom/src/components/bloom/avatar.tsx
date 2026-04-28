import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const avatarVariants = cva(
  'relative inline-flex items-center justify-center rounded-full overflow-hidden flex-shrink-0 font-semibold',
  {
    variants: {
      size: {
        xs: 'h-6 w-6 text-[10px]',
        sm: 'h-8 w-8 text-[11px]',
        md: 'h-10 w-10 text-[13px]',
        lg: 'h-14 w-14 text-[16px]',
        xl: 'h-20 w-20 text-[20px]',
      },
      variant: {
        brand: 'bg-[#ec008c] text-white',
        neutral: 'bg-[#f5f5f6] text-[#31313a]',
      },
    },
    defaultVariants: { size: 'md', variant: 'brand' },
  }
)

const statusColorMap = {
  online: 'bg-[#0f9f40]',
  offline: 'bg-[#c9c9cc]',
  away: 'bg-[#f5a623]',
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string
  name?: string
  alt?: string
  status?: 'online' | 'offline' | 'away'
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size, variant, src, name, alt, status, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('relative inline-flex flex-shrink-0', className)} {...props}>
        <div className={cn(avatarVariants({ size, variant }))}>
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={alt ?? name ?? 'avatar'} className="h-full w-full object-cover" />
          ) : name ? (
            <span>{getInitials(name)}</span>
          ) : (
            <span className="text-current">?</span>
          )}
        </div>
        {status && (
          <span
            className={cn(
              'absolute bottom-0 right-0 rounded-full border-2 border-white',
              statusColorMap[status],
              size === 'xs' && 'h-1.5 w-1.5',
              size === 'sm' && 'h-2 w-2',
              (size === 'md' || !size) && 'h-2.5 w-2.5',
              size === 'lg' && 'h-3 w-3',
              size === 'xl' && 'h-4 w-4',
            )}
          />
        )}
      </div>
    )
  }
)
Avatar.displayName = 'Avatar'

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
  size?: AvatarProps['size']
  children: React.ReactNode
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ className, max = 4, size = 'md', children, ...props }, ref) => {
    const avatarArray = React.Children.toArray(children)
    const visible = avatarArray.slice(0, max)
    const overflow = avatarArray.length - max

    return (
      <div ref={ref} className={cn('flex -space-x-2', className)} {...props}>
        {visible.map((child, i) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement<AvatarProps>, { key: i, size })
            : child
        )}
        {overflow > 0 && (
          <div className={cn(avatarVariants({ size, variant: 'neutral' }), 'ring-2 ring-white z-10')}>
            +{overflow}
          </div>
        )}
      </div>
    )
  }
)
AvatarGroup.displayName = 'AvatarGroup'

export { Avatar, AvatarGroup, avatarVariants }
