import Link from "next/link"

import { site } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0a1628] text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-heading text-xl font-semibold tracking-tight">
            {site.shortName}
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
            {site.tagline}
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-flex text-sm font-semibold text-[#5E97FF] transition-colors hover:text-white"
          >
            Contact us →
          </Link>
        </div>
        <div className="space-y-2 text-sm leading-relaxed text-white/75">
          <p>
            <span className="text-white/45">Tel:</span> {site.phone}
          </p>
          <p>
            <span className="text-white/45">Email:</span>{" "}
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-[#5E97FF]"
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
