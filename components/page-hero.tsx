import Image from "next/image"

import { cn } from "@/lib/utils"

type PageHeroProps = {
  title: string
  subtitle?: string
  image: string
  imageAlt?: string
  className?: string
}

export function PageHero({
  title,
  subtitle,
  image,
  imageAlt = "",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[42vh] items-end overflow-hidden bg-[#0a1628] text-white sm:min-h-[48vh]",
        className
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="animate-hero-ken object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/55 to-[#0a1628]/20" />
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-24 sm:px-6 sm:pb-16">
        <p className="animate-fade-up text-xs font-semibold tracking-[0.22em] text-[#5E97FF] uppercase">
          Enable Design System
        </p>
        <h1 className="animate-fade-up font-heading mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl [animation-delay:80ms]">
          {title}
        </h1>
        {subtitle ? (
          <p className="animate-fade-up mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg [animation-delay:140ms]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  )
}
