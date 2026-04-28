# Bloom UI Components

shadcn-compatible component library using Bloom 4 design tokens.

## Usage

```tsx
import { Button, Input, Badge } from '@/components/bloom'
```

## Components

| Component   | Variants                                          | Key Props                                    |
|-------------|---------------------------------------------------|----------------------------------------------|
| Button      | brand, secondary, outline, ghost, destructive, link, dark | size, loading, leftIcon, rightIcon, fullWidth |
| Input       | default, error, disabled                          | label, helperText, errorText, leftIcon, rightIcon |
| Label       | —                                                 | required                                     |
| Badge       | brand, brandSolid, success, error, warning, info, neutral, discount, brandOutline, neutralOutline | size, rounded |
| Pill        | active, default, outline, ghost                   | label, closeable, onClose, selected          |
| Card        | default, flat, elevated                           | —                                            |
| Tabs        | line, contained                                   | defaultValue, value, onValueChange           |
| Checkbox    | —                                                 | label, indeterminate, error                  |
| Switch      | —                                                 | label, size (sm/md)                          |
| Alert       | brand, success, error, warning, info              | title, closeable, onClose                    |
| Avatar      | brand, neutral                                    | src, name, size, status                      |
| AvatarGroup | —                                                 | max, size                                    |
| Separator   | default, muted, brand                             | orientation, label                           |
| Spinner     | brand, neutral, white                             | size, label                                  |
| Select      | default, error, disabled                          | label, options, placeholder, helperText, errorText |

## Design Tokens

All components use Bloom 4 hex tokens directly:
- **Brand**: `#ec008c` (hover: `#d90082`, tap: `#ab0067`, light: `#fff2f9`)
- **Text**: `#31313a` (primary), `#69696f` (secondary), `#c9c9cc` (disabled)
- **Border**: `#e0e0e3`
- **Backgrounds**: `#ffffff`, `#f5f5f6`, `#ebebec`
- **Success**: `#0f9f40` / **Error**: `#dd1f29` / **Warning**: `#f5a623` / **Info**: `#0c4df0`
