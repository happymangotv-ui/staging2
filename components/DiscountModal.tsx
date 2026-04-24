'use client'

import { useState, useEffect } from 'react'
import { BOOKING, IMGS } from '@/lib/constants'

export default function DiscountModal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem('cl_discount_submitted')) {
        setOpen(true)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!open) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).classList.contains('discount-overlay')) setOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '1919c390-578f-4ee8-a659-f23ae9a1ebce',
          subject: 'New discount signup — City Laundry',
          email,
        }),
      })
      localStorage.setItem('cl_discount_submitted', '1')
    } catch {
      // silently ignore
    }
    setOpen(false)
    window.open(BOOKING, '_blank')
  }

  return (
    <div className="discount-overlay" onClick={handleOverlayClick}>
      <div className="discount-modal-wrap">
        <button className="discount-modal-close" onClick={() => setOpen(false)} aria-label="Close">
          ✕
        </button>
        <div className="discount-modal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="discount-modal-img" src={IMGS.washFold} alt="Fresh laundry" />

          <div className="discount-modal-body">
            <div className="discount-badge">LIMITED OFFER</div>
            <h2>10% off your <em>first order</em></h2>
            <p>
              New customers get 10% off their first wash &amp; fold pickup. Use the code below
              when booking online.
            </p>

            <div className="discount-code-box">
              <div className="discount-code-label">YOUR PROMO CODE</div>
              <div className="discount-code">CITY10</div>
            </div>

            <div className="discount-modal-actions">
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%' }}>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  style={{
                    width: '100%', padding: '12px 16px', borderRadius: 10,
                    border: '1.5px solid var(--hairline)', fontSize: 15,
                    fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box',
                  }}
                />
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Claim discount &amp; book →
                </button>
              </form>
              <button
                onClick={() => setOpen(false)}
                style={{ background: 'none', border: 'none', fontSize: '13px', color: 'var(--ash)', cursor: 'pointer', padding: '4px' }}
              >
                No thanks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
