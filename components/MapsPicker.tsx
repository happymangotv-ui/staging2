'use client'

import { useState } from 'react'
import { MAPS, ADDR } from '@/lib/constants'

const OPTIONS = [
  {
    label: 'Google Maps',
    url: MAPS,
    bg: '#2d7d6e',
  },
  {
    label: 'Apple Maps',
    url: `https://maps.apple.com/?q=${encodeURIComponent(ADDR)}`,
    bg: '#2d7d6e',
  },
  {
    label: 'Waze',
    url: `https://waze.com/ul?q=${encodeURIComponent(ADDR)}&navigate=yes`,
    bg: '#2d7d6e',
  },
]

interface Props {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export default function MapsPicker({ children, className, style }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <span
        onClick={() => setOpen(true)}
        className={className}
        style={{ cursor: 'pointer', ...style }}
      >
        {children}
      </span>

      {open && (
        <div className="maps-overlay" onClick={() => setOpen(false)}>
          <div className="maps-modal" onClick={(e) => e.stopPropagation()}>
            <div className="maps-modal-title">Open address in…</div>
            <div className="maps-modal-addr">{ADDR}</div>
            <div className="maps-options">
              {OPTIONS.map((opt) => (
                <a
                  key={opt.label}
                  href={opt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maps-option"
                  style={{ background: opt.bg, color: '#ffffff' }}
                  onClick={() => setOpen(false)}
                >
                  {opt.label}
                </a>
              ))}
            </div>
            <button className="maps-cancel" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}
