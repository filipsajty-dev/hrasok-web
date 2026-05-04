'use client'

import { useState, useEffect } from 'react'
import { ZapisModal } from '@/components/sections/ZapisModal'

const DISMISS_KEY = 'hrašok-announcement-v1'

export function AnnouncementBar() {
  const [visible, setVisible] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(DISMISS_KEY)) {
      setVisible(true)
    }
  }, [])

  function dismiss(e: React.MouseEvent) {
    e.stopPropagation()
    localStorage.setItem(DISMISS_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <>
      <div className="bg-primary text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2">
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="flex-1 cursor-pointer text-center text-sm text-white transition-opacity hover:opacity-90"
          >
            <strong className="font-semibold">Zápis na školský rok 2026/2027</strong>
            {' · Prihláste sa do 31.5. — '}
            <span className="underline underline-offset-2">Zistiť viac →</span>
          </button>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Zavrieť oznámenie"
            className="shrink-0 text-xl leading-none text-white/70 transition-colors hover:text-white"
          >
            ×
          </button>
        </div>
      </div>

      <ZapisModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
