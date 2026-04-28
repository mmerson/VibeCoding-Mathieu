'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'

type TabsVariant = 'line' | 'contained'

interface TabsContextValue {
  activeTab: string
  setActiveTab: (tab: string) => void
  variant: TabsVariant
}

const TabsContext = React.createContext<TabsContextValue>({
  activeTab: '',
  setActiveTab: () => {},
  variant: 'line',
})

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue: string
  value?: string
  onValueChange?: (value: string) => void
  variant?: TabsVariant
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ defaultValue, value, onValueChange, variant = 'line', className, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const activeTab = value ?? internalValue
    const setActiveTab = (tab: string) => {
      setInternalValue(tab)
      onValueChange?.(tab)
    }
    return (
      <TabsContext.Provider value={{ activeTab, setActiveTab, variant }}>
        <div ref={ref} className={cn('w-full', className)} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  }
)
Tabs.displayName = 'Tabs'

const TabsList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { variant } = React.useContext(TabsContext)
    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          variant === 'line' && 'border-b border-[#e0e0e3] gap-0',
          variant === 'contained' && 'bg-[#f5f5f6] rounded-full p-1 gap-1 w-fit',
          className
        )}
        {...props}
      />
    )
  }
)
TabsList.displayName = 'TabsList'

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, value, children, ...props }, ref) => {
    const { activeTab, setActiveTab, variant } = React.useContext(TabsContext)
    const isActive = activeTab === value
    return (
      <button
        ref={ref}
        onClick={() => setActiveTab(value)}
        className={cn(
          'transition-colors focus-visible:outline-none cursor-pointer font-semibold',
          variant === 'line' && [
            'pb-3 px-4 text-[13px] -mb-px border-b-2',
            isActive
              ? 'text-[#ec008c] border-[#ec008c]'
              : 'text-[#69696f] border-transparent hover:text-[#31313a]',
          ],
          variant === 'contained' && [
            'rounded-full px-4 py-1.5 text-[13px]',
            isActive
              ? 'bg-white shadow text-[#31313a]'
              : 'text-[#69696f] hover:text-[#31313a]',
          ],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value: string }>(
  ({ className, value, ...props }, ref) => {
    const { activeTab } = React.useContext(TabsContext)
    if (activeTab !== value) return null
    return (
      <div ref={ref} className={cn('mt-4', className)} {...props} />
    )
  }
)
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }
