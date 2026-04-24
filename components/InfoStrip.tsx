import { PHONE, ADDR } from '@/lib/constants'

export default function InfoStrip() {
  const items = [
    {
      label: 'Location',
      val: ADDR,
      href: 'https://maps.google.com/?q=391+Brook+Ave+Bronx+NY+10454',
      icon: (
        <>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" strokeWidth="0" />
        </>
      ),
    },
    {
      label: 'Phone',
      val: PHONE,
      href: `tel:${PHONE}`,
      icon: (
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.09 9.82a19.79 19.79 0 0 1-3-8.59A2 2 0 0 1 3.12 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 18z" />
      ),
    },
    {
      label: 'Hours',
      val: 'Mon–Sun: 7am – 8pm',
      href: undefined,
      icon: (
        <>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </>
      ),
    },
  ]

  return (
    <div className="info-strip">
      {items.map((it, i) => {
        const inner = (
          <>
            <div className="info-icon">
              <svg viewBox="0 0 24 24">{it.icon}</svg>
            </div>
            <div className="info-label">{it.label}</div>
            <div className="info-val">{it.val}</div>
          </>
        )
        return it.href ? (
          <a key={i} className="info-block" href={it.href} target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: 'none', cursor: 'pointer' }}>
            {inner}
          </a>
        ) : (
          <div key={i} className="info-block">{inner}</div>
        )
      })}
    </div>
  )
}
