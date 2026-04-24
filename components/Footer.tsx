import Link from 'next/link'
import { PHONE, ADDR, EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div>
          <div className="footer-logo">The City <em>Laundry</em></div>
          <p className="footer-desc">
            Professional laundry services for Manhattan and the Bronx. Clean clothes, happy
            customers — every time.
          </p>
        </div>

        <div className="footer-col">
          <h4>SERVICES</h4>
          <ul>
            <li><Link href="/pickup">Pickup &amp; Delivery</Link></li>
            <li><Link href="/selfserve">Self-Serve</Link></li>
            <li><Link href="/commercial">Commercial</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>CONTACT</h4>
          <ul>
            <li><span>{ADDR}</span></li>
            <li><a href={`tel:${PHONE}`}>{PHONE}</a></li>
            <li><a href={`mailto:${EMAIL}?subject=The%20City%20Laundry%20Inquiry`}>{EMAIL}</a></li>
            <li><span>Mon–Sun: 7am – 8pm</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 The City Laundry. All rights reserved.</span>
        <span>{ADDR}</span>
      </div>
    </footer>
  )
}
