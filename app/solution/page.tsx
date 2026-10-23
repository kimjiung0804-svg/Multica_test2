import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { solutions } from "@/lib/site"

export const metadata: Metadata = {
  title: "Solution",
}

export default function SolutionPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="AI-driven EDA tooling, customized environments, consulting, and expert training for semiconductor design teams."
        image="/images/solution-1.jpg"
        imageAlt="EDA solution workspace"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6">
          {solutions.map((item, index) => {
            const reverse = index % 2 === 1
            return (
              <article
                key={item.title}
                className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
              >
                <div className={reverse ? "lg:order-2" : undefined}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#eef5fb]">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>
                <div className={reverse ? "lg:order-1" : undefined}>
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#0088CB] uppercase">
                    Service {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-heading mt-3 text-2xl font-semibold tracking-tight text-[#0a1628] sm:text-3xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-[#5f6360] sm:text-base">
                    {item.body}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-[#eef5fb] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#0a1628]">
            We Integrate with Your Ecosystem
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5f6360] sm:text-base">
            We’re here to help you. Leverage our experts to help you find the
            right solution for your integration needs. Whether you are looking
            to modernize your integration, consolidate your systems, or simply
            looking for an easier way to build and integrate your ecosystem,
            Enable Design System, Inc. has you covered.
          </p>
          <Button
            render={<Link href="/contact" />}
            className="mt-8 h-11 rounded-none bg-[#0088CB] px-7 text-sm font-semibold tracking-wide text-white hover:bg-[#0070a8]"
          >
            Talk to an Expert
          </Button>
        </div>
      </section>
    </>
  )
}
