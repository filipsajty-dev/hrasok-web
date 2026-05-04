# Modal

Headless, accessible dialog primitive.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `isOpen` | `boolean` | — | Controls visibility |
| `onClose` | `() => void` | — | Called after close animation (200 ms) |
| `title` | `string` | — | Accessible name for the dialog (`aria-labelledby`) |
| `maxWidth` | `number` | `800` | Max dialog width in px |
| `children` | `ReactNode` | — | Dialog content |

## Features

- Backdrop click closes; Esc closes
- Focus trapped inside while open; returns to trigger on close
- Body scroll locked (`overflow: hidden`) while open
- Smooth open/close animation (200 ms fade + scale); respects `prefers-reduced-motion`
- `aria-modal`, `role="dialog"`, `aria-labelledby`

## Usage

```tsx
import { Modal } from '@/components/ui'

function MyPage() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="My dialog">
        <div className="p-6">
          <h2>Hello from the modal</h2>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </Modal>
    </>
  )
}
```

## Pattern for content components

Create a named wrapper component for each concrete use case
(e.g. `ZapisModal`, `PhotoLightbox`) that imports `Modal` and
composes it with its own layout and data. Never put business
content directly in the primitive.
