import Image from "next/image"
import Link from "next/link"

import { navItems, site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a1628] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_0.7fr_1fr]">
        <div>
          <Link
            href="/"
            className="relative mb-4 block h-8 w-[160px] transition-opacity hover:opacity-90"
          >
            <Image
              src="/images/logo-light.png"
              alt={site.name}
              fill
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
            {site.tagline}
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex text-sm font-semibold text-[#5E97FF] transition-colors duration-300 hover:text-white"
          >
            Contact us →
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">
            Menu
          </p>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/75 transition-colors duration-300 hover:text-[#5E97FF]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 text-sm leading-relaxed text-white/75">
          <p className="text-xs font-semibold tracking-[0.16em] text-white/45 uppercase">
            Contact
          </p>
          <p className="pt-2">
            <span className="text-white/45">Tel:</span> {site.phone}
          </p>
          <p>
            <span className="text-white/45">Email:</span>{" "}
            <a
              href={`mailto:${site.email}`}
              className="transition-colors duration-300 hover:text-[#5E97FF]"
            >
              {site.email}
            </a>
          </p>
          <p>
            <span className="text-white/45">Address:</span> {site.address}
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-white/45 sm:px-6">
          {site.copyright}
        </p>
      </div>
    </footer>
  )
}
