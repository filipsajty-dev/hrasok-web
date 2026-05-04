'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  /** Used as the accessible name for the dialog (aria-labelledby). */
  title: string
  /** Max width of the dialog panel in px. Default: 800. */
  maxWidth?: number
  children: React.ReactNode
}

const FOCUSABLE =
  'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function Modal({ isOpen, onClose, title, maxWidth = 800, children }: ModalProps) {
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)
  const [closing, setClosing] = useState(false)

  // Internal close: trigger animation, then call parent onClose
  function handleClose() {
    setClosing(true)
  }

  useEffect(() => {
    if (!closing) return
    const id = setTimeout(() => {
      setClosing(false)
      onClose()
    }, 200)
    return () => clearTimeout(id)
  }, [closing, onClose])

  // Remember trigger element; return focus on close
  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLElement
    } else {
      triggerRef.current?.focus()
      triggerRef.current = null
    }
  }, [isOpen])

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Focus first focusable element on open
  useEffect(() => {
    if (!isOpen || !panelRef.current) return
    const el = panelRef.current.querySelector<HTMLElement>(FOCUSABLE)
    requestAnimationFrame(() => el?.focus())
  }, [isOpen])

  // Esc to close + Tab trap
  useEffect(() => {
    if (!isOpen) return

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleClose()
        return
      }
      if (e.key !== 'Tab' || !panelRef.current) return
      const nodes = Array.from(panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE))
      if (!nodes.length) return
      const first = nodes[0]
      const last = nodes[nodes.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  if (!isOpen && !closing) return null

  return (
    <div
      className={cn(
        'modal-backdrop fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4 sm:p-6 bg-black/50 backdrop-blur-sm',
        closing && 'modal-closing',
      )}
      onClick={handleClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        style={{ maxWidth: `${maxWidth}px` }}
        className={cn(
          'modal-panel relative my-auto w-full rounded-[var(--radius-lg)] bg-surface shadow-2xl',
          closing && 'modal-closing',
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* sr-only title for aria-labelledby */}
        <span id={titleId} className="sr-only">{title}</span>

        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Zavrieť"
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none text-muted transition-colors hover:bg-border hover:text-text"
        >
          <span aria-hidden="true">×</span>
        </button>

        <div className="max-h-[calc(100vh-3rem)] overflow-y-auto rounded-[var(--radius-lg)]">
          {children}
        </div>
      </div>
    </div>
  )
}
