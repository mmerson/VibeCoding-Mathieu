'use client'
import * as React from 'react'
import {
  Button, Input, Badge, Pill, Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter, Tabs, TabsList, TabsTrigger, TabsContent,
  Checkbox, Switch, Alert, Avatar, AvatarGroup, Separator, Spinner, Select,
} from '@/components/bloom'
import { Heart, Search, Eye, ShoppingBag, ArrowRight, Plus } from 'lucide-react'

function Section({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) {
  return (
    <section className="py-10">
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#31313a] mb-1">{title}</h2>
        {description && <p className="text-[13px] text-[#69696f]">{description}</p>}
      </div>
      {children}
    </section>
  )
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="mt-3 rounded-[4px] bg-[#1e1e2e] text-[#cdd6f4] text-[12px] p-4 overflow-x-auto leading-relaxed">
      <code>{code}</code>
    </pre>
  )
}

function DemoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[8px] border border-[#e0e0e3] bg-[#fafafa] p-6 flex flex-wrap gap-4 items-start">
      {children}
    </div>
  )
}

export default function Page() {
  const [checkboxChecked, setCheckboxChecked] = React.useState(false)
  const [switchOn, setSwitchOn] = React.useState(false)
  const [pills, setPills] = React.useState(['React', 'TypeScript', 'Next.js', 'Tailwind'])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#e0e0e3]">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[20px] font-bold text-[#ec008c] tracking-tight">veepee</span>
            <Separator orientation="vertical" className="h-5" />
            <span className="text-[13px] font-semibold text-[#69696f]">Bloom UI Kit</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="brandSolid" size="sm">v4.0</Badge>
            <Badge variant="neutral" size="sm">Next.js 16</Badge>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#fff2f9] to-white border-b border-[#e0e0e3]">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <Badge variant="brand" className="mb-4">Bloom Design System</Badge>
          <h1 className="text-[32px] font-bold text-[#31313a] mb-3 leading-tight">
            Beautiful components,<br />
            <span className="text-[#ec008c]">Bloom-styled.</span>
          </h1>
          <p className="text-[14px] text-[#69696f] max-w-xl mb-6">
            A complete component library following shadcn&apos;s architecture with full Bloom 4 design system styling. Built with Tailwind v4, CVA, and React 19.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button size="lg" leftIcon={<ShoppingBag className="h-4 w-4" />}>Get Started</Button>
            <Button size="lg" variant="outline">View on GitHub</Button>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 divide-y divide-[#e0e0e3]">

        {/* Buttons */}
        <Section title="Button" description="7 variants, 3 sizes, loading state, icon support, full width.">
          <DemoBox>
            <Button variant="brand">Brand</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
          </DemoBox>
          <DemoBox>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="icon"><Heart className="h-4 w-4" /></Button>
            <Button loading>Loading</Button>
            <Button leftIcon={<Plus className="h-4 w-4" />}>Add Item</Button>
            <Button rightIcon={<ArrowRight className="h-4 w-4" />}>Continue</Button>
          </DemoBox>
          <DemoBox>
            <Button fullWidth>Full Width Button</Button>
          </DemoBox>
          <CodeBlock code={`<Button variant="brand" size="md" loading={false} leftIcon={<Plus />}>
  Add Item
</Button>`} />
        </Section>

        {/* Inputs */}
        <Section title="Input" description="With labels, helper text, error states, and icon support.">
          <DemoBox>
            <div className="w-64">
              <Input label="Email address" placeholder="you@example.com" required />
            </div>
            <div className="w-64">
              <Input label="Search" placeholder="Search..." leftIcon={<Search className="h-4 w-4" />} />
            </div>
            <div className="w-64">
              <Input label="Password" type="password" placeholder="••••••••" rightIcon={<Eye className="h-4 w-4" />} helperText="Min 8 characters" />
            </div>
          </DemoBox>
          <DemoBox>
            <div className="w-64">
              <Input label="Email" placeholder="Invalid email" error errorText="Please enter a valid email address." />
            </div>
            <div className="w-64">
              <Input label="Disabled" placeholder="Can't edit this" disabled />
            </div>
          </DemoBox>
          <CodeBlock code={`<Input
  label="Email address"
  placeholder="you@example.com"
  required
  errorText="Please enter a valid email."
  error
/>`} />
        </Section>

        {/* Badges */}
        <Section title="Badge" description="Status indicators with 10 variants, 2 sizes, 2 roundings.">
          <DemoBox>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="brandSolid">Solid</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="discount">-20%</Badge>
            <Badge variant="brandOutline">Outline</Badge>
            <Badge variant="neutralOutline">Neutral Outline</Badge>
          </DemoBox>
          <DemoBox>
            <Badge variant="brand" size="sm" rounded="sm">Small Rect</Badge>
            <Badge variant="success" size="md" rounded="full">Full Round</Badge>
            <Badge variant="info" size="sm" rounded="full">SM Round</Badge>
          </DemoBox>
          <CodeBlock code={`<Badge variant="success" size="md" rounded="full">In Stock</Badge>
<Badge variant="discount" size="sm">-20%</Badge>`} />
        </Section>

        {/* Pills */}
        <Section title="Pill" description="Chip/tag component with close support. 4 variants, 2 sizes.">
          <DemoBox>
            <Pill label="Active" variant="active" />
            <Pill label="Default" variant="default" />
            <Pill label="Outline" variant="outline" />
            <Pill label="Ghost" variant="ghost" />
          </DemoBox>
          <DemoBox>
            {pills.map((p) => (
              <Pill
                key={p}
                label={p}
                closeable
                onClose={() => setPills(prev => prev.filter(x => x !== p))}
                variant="outline"
              />
            ))}
          </DemoBox>
          <CodeBlock code={`<Pill label="React" closeable onClose={() => removeTag('React')} variant="outline" />
<Pill label="Active" selected />`} />
        </Section>

        {/* Cards */}
        <Section title="Card" description="3 variants: default (border), flat, elevated.">
          <div className="grid grid-cols-3 gap-4">
            {(['default', 'flat', 'elevated'] as const).map((v) => (
              <Card key={v} variant={v}>
                <CardHeader>
                  <CardTitle>Card {v}</CardTitle>
                  <CardDescription>This is a {v} card with some description text.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-[13px] text-[#69696f]">Card body content goes here.</p>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button size="sm" variant="brand">Action</Button>
                  <Button size="sm" variant="ghost">Cancel</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <CodeBlock code={`<Card variant="elevated">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter><Button>Action</Button></CardFooter>
</Card>`} />
        </Section>

        {/* Tabs */}
        <Section title="Tabs" description="Line variant (underline) and contained variant (segmented).">
          <div className="space-y-8">
            <div>
              <p className="text-[11px] font-semibold text-[#69696f] mb-3 uppercase tracking-wide">Line</p>
              <Tabs defaultValue="overview" variant="line">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                </TabsList>
                <TabsContent value="overview"><p className="text-[13px] text-[#69696f]">Overview content shown here.</p></TabsContent>
                <TabsContent value="features"><p className="text-[13px] text-[#69696f]">Features content shown here.</p></TabsContent>
                <TabsContent value="pricing"><p className="text-[13px] text-[#69696f]">Pricing content shown here.</p></TabsContent>
              </Tabs>
            </div>
            <div>
              <p className="text-[11px] font-semibold text-[#69696f] mb-3 uppercase tracking-wide">Contained</p>
              <Tabs defaultValue="day" variant="contained">
                <TabsList>
                  <TabsTrigger value="day">Day</TabsTrigger>
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                </TabsList>
                <TabsContent value="day"><p className="text-[13px] text-[#69696f]">Daily view.</p></TabsContent>
                <TabsContent value="week"><p className="text-[13px] text-[#69696f]">Weekly view.</p></TabsContent>
                <TabsContent value="month"><p className="text-[13px] text-[#69696f]">Monthly view.</p></TabsContent>
              </Tabs>
            </div>
          </div>
          <CodeBlock code={`<Tabs defaultValue="tab1" variant="line">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content</TabsContent>
</Tabs>`} />
        </Section>

        {/* Form Controls */}
        <Section title="Form Controls" description="Checkbox and Switch with all states.">
          <DemoBox>
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold text-[#69696f] uppercase tracking-wide">Checkbox</p>
              <Checkbox label="Unchecked" checked={false} onChange={() => {}} />
              <Checkbox label="Checked" checked={true} onChange={() => {}} />
              <Checkbox label="Indeterminate" indeterminate checked={false} onChange={() => {}} />
              <Checkbox label="Error state" error checked={false} onChange={() => {}} />
              <Checkbox label="Disabled" disabled checked={false} onChange={() => {}} />
              <Checkbox
                label={checkboxChecked ? 'I agree (checked)' : 'I agree to terms'}
                checked={checkboxChecked}
                onChange={(e) => setCheckboxChecked(e.target.checked)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[11px] font-semibold text-[#69696f] uppercase tracking-wide">Switch</p>
              <Switch label="Notifications" checked={switchOn} onChange={(e) => setSwitchOn(e.target.checked)} />
              <Switch label="Dark mode" defaultChecked={false} />
              <Switch label="Small size" size="sm" defaultChecked={true} />
              <Switch label="Disabled off" disabled />
              <Switch label="Disabled on" disabled defaultChecked />
            </div>
          </DemoBox>
          <CodeBlock code={`<Checkbox label="Accept terms" checked={checked} onChange={e => setChecked(e.target.checked)} />
<Switch label="Enable notifications" checked={on} onChange={e => setOn(e.target.checked)} size="md" />`} />
        </Section>

        {/* Alerts */}
        <Section title="Alert" description="5 semantic variants with optional title, close button.">
          <div className="flex flex-col gap-3">
            <Alert variant="brand" title="New sale available!">Check out the latest deals on veepee.</Alert>
            <Alert variant="success" title="Order confirmed">Your order #12345 has been placed successfully.</Alert>
            <Alert variant="error" title="Payment failed" closeable>Your card was declined. Please try another method.</Alert>
            <Alert variant="warning" title="Stock running low">Only 3 items left. Order soon!</Alert>
            <Alert variant="info" title="Shipping update">Your package will arrive by Thursday.</Alert>
          </div>
          <CodeBlock code={`<Alert variant="success" title="Order confirmed" closeable onClose={() => setVisible(false)}>
  Your order has been placed!
</Alert>`} />
        </Section>

        {/* Avatars */}
        <Section title="Avatar" description="All sizes, variants, status indicators, and groups.">
          <DemoBox>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-[11px] font-semibold text-[#69696f] mb-2 uppercase tracking-wide">Sizes</p>
                <div className="flex items-end gap-3">
                  <Avatar size="xs" name="Alice B" />
                  <Avatar size="sm" name="Alice B" />
                  <Avatar size="md" name="Alice B" />
                  <Avatar size="lg" name="Alice B" />
                  <Avatar size="xl" name="Alice B" />
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#69696f] mb-2 uppercase tracking-wide">Status</p>
                <div className="flex items-center gap-3">
                  <Avatar name="Online" status="online" />
                  <Avatar name="Away" status="away" variant="neutral" />
                  <Avatar name="Offline" status="offline" variant="neutral" />
                </div>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-[#69696f] mb-2 uppercase tracking-wide">Group</p>
                <AvatarGroup max={3}>
                  <Avatar name="Alice B" />
                  <Avatar name="Charlie D" variant="neutral" />
                  <Avatar name="Eve F" />
                  <Avatar name="Grace H" variant="neutral" />
                  <Avatar name="Ivan J" />
                </AvatarGroup>
              </div>
            </div>
          </DemoBox>
          <CodeBlock code={`<Avatar name="Alice B" size="md" status="online" />
<AvatarGroup max={3}>
  <Avatar name="Alice B" />
  <Avatar name="Bob C" variant="neutral" />
</AvatarGroup>`} />
        </Section>

        {/* Separator */}
        <Section title="Separator" description="Horizontal, vertical, with optional label.">
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <Separator />
              <Separator variant="brand" />
              <Separator variant="muted" className="border border-dashed border-[#e0e0e3] bg-transparent h-0" />
              <Separator label="OR" />
              <Separator label="Continue with" variant="brand" />
            </div>
            <div className="flex items-center gap-4 h-12">
              <span className="text-[13px] text-[#69696f]">Left</span>
              <Separator orientation="vertical" />
              <span className="text-[13px] text-[#69696f]">Middle</span>
              <Separator orientation="vertical" variant="brand" />
              <span className="text-[13px] text-[#69696f]">Right</span>
            </div>
          </div>
          <CodeBlock code={`<Separator label="OR" />
<Separator orientation="vertical" className="h-8" />`} />
        </Section>

        {/* Spinner */}
        <Section title="Spinner" description="3 sizes, 3 color variants, optional label.">
          <DemoBox>
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner variant="neutral" />
            <div className="bg-[#ec008c] rounded-[4px] p-3">
              <Spinner variant="white" />
            </div>
            <Spinner label="Loading..." />
          </DemoBox>
          <CodeBlock code={`<Spinner size="md" variant="brand" label="Loading..." />`} />
        </Section>

        {/* Select */}
        <Section title="Select" description="Native select with custom styling, label, helper/error text.">
          <DemoBox>
            <div className="w-64">
              <Select
                label="Country"
                placeholder="Select a country..."
                options={[
                  { value: 'fr', label: 'France' },
                  { value: 'de', label: 'Germany' },
                  { value: 'es', label: 'Spain' },
                  { value: 'it', label: 'Italy' },
                ]}
                helperText="Choose your shipping country"
              />
            </div>
            <div className="w-64">
              <Select
                label="Category"
                placeholder="Select..."
                error
                errorText="Please select a category"
                options={[{ value: 'fashion', label: 'Fashion' }, { value: 'sport', label: 'Sport' }]}
              />
            </div>
            <div className="w-64">
              <Select
                label="Disabled"
                placeholder="Unavailable"
                disabled
                options={[{ value: 'x', label: 'Option' }]}
              />
            </div>
          </DemoBox>
          <CodeBlock code={`<Select
  label="Country"
  placeholder="Select a country..."
  options={[{ value: 'fr', label: 'France' }]}
  helperText="Choose your shipping country"
/>`} />
        </Section>

      </main>

      <footer className="border-t border-[#e0e0e3] mt-8">
        <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
          <span className="text-[13px] text-[#69696f]">Bloom UI Kit — veepee design system</span>
          <Badge variant="brand">Bloom 4</Badge>
        </div>
      </footer>
    </div>
  )
}

