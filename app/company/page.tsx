import type { Metadata } from "next"
import Image from "next/image"

import { PageHero } from "@/components/page-hero"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Company",
}

export default function CompanyPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Global company for the design of complex and heterogeneous chiplets"
        image="/images/circuit.jpg"
        imageAlt="Semiconductor design"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#0a1628]">
              Enable Design System, Inc.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-[#5f6360] sm:text-base">
              The Enable Design System, Inc. is exploring new business areas
              through constant innovation of core competitiveness. We are doing
              our best to become a company that leads the industry based on
              excellent technology and customer trust, impressing customers with
              transparent and open management, giving pride and happiness to
              executives and employees. If you would like to have a meeting with
              a sales representative, please feel free to contact us.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-[#eef5fb]">
            <Image
              src="/images/partner.jpg"
              alt="Enable Design partners"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#eef5fb] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#0088CB] uppercase">
            Our Story
          </p>
          <h2 className="font-heading mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-[#0a1628]">
            Passionate developers building the next generation of EDA
          </h2>
          <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-[#5f6360] sm:text-base">
            <p>
              Enable Design System, Inc. launched by passionate and talented
              developers dreaming of a better future. Since its foundation in
              2019, it has provided high-quality services to customers with
              unique ideas and technologies of the Enable Design System, Inc.
            </p>
            <p>
              Available from a wide variety of semiconductor designers, our
              company&apos;s smart solutions offer unique features that have
              never been seen before. The Enable Design System, Inc. is always
              striving to create new products that will revolutionize the
              industry. In order to become a leading player in the EDA industry,
              we are working hard to develop innovative products based on
              machine learning.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#0a1628]">
            Our Partners
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-[#5f6360] sm:text-base">
            We collaborate with universities and industry partners through the
            AI-EDA consortium and customer engagements across semiconductor
            design.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["AI-EDA Consortium", "University Partners", "Industry Partners"].map(
              (label) => (
                <div
                  key={label}
                  className="flex min-h-28 items-center justify-center border border-[#e5e8ec] bg-[#fafafa] px-4 text-center text-sm font-semibold tracking-wide text-[#0a1628]/75"
                >
                  {label}
                </div>
              )
            )}
          </div>
          <dl className="mt-12 space-y-2 text-sm text-[#0a1628]/80">
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
              <dd className="mt-1 max-w-xl text-[#5f6360]">{site.address}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  )
}
