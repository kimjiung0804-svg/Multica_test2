"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

import { navItems, site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a1628]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.5rem] sm:px-6">
        <Link
          href="/"
          className="relative h-8 w-[160px] shrink-0 transition-opacity hover:opacity-90 sm:h-9 sm:w-[180px]"
          aria-label={`${site.name} home`}
        >
          <Image
            src="/images/logo-light.png"
            alt={site.name}
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative px-3 py-2 text-[13px] font-semibold tracking-[0.08em] transition-colors duration-300",
                  active
                    ? "text-[#5E97FF]"
                    : "text-white/85 hover:text-white"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-0.5 origin-left bg-[#5E97FF] transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center lg:flex">
          <Link
            href="/contact"
            className="inline-flex h-9 items-center bg-[#0088CB] px-4 text-xs font-semibold tracking-[0.08em] text-white transition duration-300 hover:bg-[#0070a8] hover:shadow-[0_8px_24px_rgba(0,136,203,0.35)]"
          >
            CONTACT
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="inline-flex h-10 w-10 items-center justify-center text-white transition-colors hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-full origin-center bg-white transition-transform duration-300",
                open && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full bg-white transition-opacity duration-200",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "h-0.5 w-full origin-center bg-white transition-transform duration-300",
                open && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer backdrop */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 bg-black/50 transition-opacity duration-300 lg:hidden sm:top-[4.5rem]",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <div
        id="mobile-nav"
        className={cn(
          "fixed top-16 right-0 z-50 flex h-[calc(100svh-4rem)] w-[min(100%,20rem)] flex-col border-l border-white/10 bg-[#0a1628] shadow-2xl transition-transform duration-300 ease-out sm:top-[4.5rem] sm:h-[calc(100svh-4.5rem)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-1 flex-col px-2 py-4" aria-label="Mobile">
          {navItems.map((item, i) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={cn(
                  "border-b border-white/5 px-4 py-3.5 text-sm font-semibold tracking-[0.08em] transition-all duration-300",
                  active
                    ? "bg-white/5 text-[#5E97FF]"
                    : "text-white/90 hover:bg-white/5 hover:text-white",
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className="border-t border-white/10 p-4">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="flex h-11 items-center justify-center bg-[#0088CB] text-sm font-semibold tracking-[0.08em] text-white transition hover:bg-[#0070a8]"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  )
}
