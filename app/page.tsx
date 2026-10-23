import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { homeServices, site } from "@/lib/site"

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0a1628] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/circuit.jpg"
            alt=""
            fill
            priority
            className="animate-hero-ken object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(0,136,203,0.35),transparent_55%),linear-gradient(180deg,#0a1628_0%,rgba(10,22,40,0.72)_45%,#0a1628_100%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <p className="animate-fade-up text-xs font-semibold tracking-[0.24em] text-[#5E97FF] uppercase">
              {site.tagline}
            </p>
            <h1 className="animate-fade-up font-heading mt-5 max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.35rem] lg:leading-[1.12] [animation-delay:90ms]">
              Let Your Technology Take Your Business to Easy and Fast Market
            </h1>
            <p className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg [animation-delay:160ms]">
              The solutions in the Enable Design System, Inc. help customers
              achieve greater success. It has a variety of features that
              streamline your work environment and life. We are continuously
              researching and developing solutions for customer convenience.
            </p>
            <div className="animate-fade-up mt-8 flex flex-wrap gap-3 [animation-delay:220ms]">
              <Button
                render={<Link href="/solution" />}
                className="btn-primary-motion h-11 rounded-none bg-[#0088CB] px-7 text-sm font-semibold tracking-wide text-white"
              >
                Explore Solutions
              </Button>
              <Button
                render={<Link href="/contact" />}
                variant="outline"
                className="h-11 rounded-none border-white/35 bg-transparent px-7 text-sm font-semibold tracking-wide text-white transition duration-300 hover:border-white hover:bg-white/10 hover:text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
            <div className="animate-pulse-ring absolute inset-[12%] rounded-full border border-[#5E97FF]/35" />
            <div className="animate-float-soft relative h-full w-full">
              <Image
                src="/images/hero-chip.png"
                alt="AI chip visualization"
                fill
                className="object-contain drop-shadow-[0_20px_60px_rgba(0,136,203,0.35)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#0088CB] uppercase">
              Use AI to Get a 360-degree View of Your Business
            </p>
            <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">
              Our Core Capabilities
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {homeServices.map((item, i) => (
              <article
                key={item.title}
                className="group border border-[#e5e8ec] bg-[#fafafa] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0088CB]/40 hover:shadow-[0_18px_40px_rgba(10,22,40,0.08)]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="mb-4 h-1 w-10 bg-[#0088CB] transition-all group-hover:w-16" />
                <h3 className="font-heading text-xl font-semibold text-[#0a1628]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f6360]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ML / EDA */}
      <section className="overflow-hidden bg-[#0a1628] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/ml-eda.jpg"
              alt="Machine learning for EDA"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1628]/50 to-transparent" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#5E97FF] uppercase">
              Research
            </p>
            <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Bringing Machine Learning to EDA System
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/75 sm:text-base">
              Enable Design System, Inc. has participated AI-EDA consortisum
              from 2021. Since 2022, we are working on an ML-based IO Planning
              project.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              AI-EDA consortium is an alliance of multiple universities and
              industries to enable ML-driven EDA system. Research outputs will
              be verified through design process at our industry partners.
              Current EDA tools are developed through several decades, and they
              are full of “rule-of-thumb heuristics”, which require designer’s
              intuition for optimal design. We therefore adopt machine learning
              to EDA system to overcome these limitations and change
              “heuristics-driven EDA” to “data-driven EDA”. This consortium is
              supported by IITP grant funded by MSIT of Korea government.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image
            src="/images/ai-icon.jpg"
            alt=""
            fill
            className="object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#0a1628] sm:text-4xl">
              Are You Ready to Accelerate Your Business?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5f6360]">
              Let’s give your business what it needs to grow. If you have any
              question or request, please contact to us.
            </p>
            <dl className="mt-8 space-y-3 text-sm text-[#0a1628]/80">
              <div>
                <dt className="inline font-semibold">Tel:</dt>{" "}
                <dd className="inline">{site.phone}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">Email:</dt>{" "}
                <dd className="inline">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-[#0088CB] hover:underline"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Address:</dt>
                <dd className="mt-1 max-w-md leading-relaxed text-[#5f6360]">
                  {site.address}
                </dd>
              </div>
            </dl>
            <Button
              render={<Link href="/contact" />}
              className="btn-primary-motion mt-8 h-11 rounded-none bg-[#0088CB] px-7 text-sm font-semibold tracking-wide text-white"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
