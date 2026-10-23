import type { Metadata } from "next"
import Image from "next/image"

import { ContactForm } from "@/components/contact-form"
import { PageHero } from "@/components/page-hero"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Let’s give your business what it needs to grow. If you have any question or request, please submit your message."
        image="/images/contact-map.jpg"
        imageAlt="Office location"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-2xl font-semibold text-[#0a1628]">
                Phone
              </h2>
              <p className="mt-2 text-[#5f6360]">{site.phone}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-[#0a1628]">
                Fax
              </h2>
              <p className="mt-2 text-[#5f6360]">{site.fax}</p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-[#0a1628]">
                Email
              </h2>
              <p className="mt-2 text-[#5f6360]">
                <a
                  href={`mailto:${site.email}`}
                  className="text-[#0088CB] hover:underline"
                >
                  {site.email}
                </a>
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-semibold text-[#0a1628]">
                Address
              </h2>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#5f6360]">
                {site.addressShort}
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-semibold text-[#0a1628]">
              Send a message
            </h2>
            <p className="mt-2 mb-6 text-sm text-[#5f6360]">
              We will get back to you soon.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-[#eef5fb] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#0a1628]">
              Visit Us
            </h2>
            <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#5f6360]">
              <div>
                <p className="font-semibold text-[#0a1628]">Car</p>
                <ul className="mt-1 list-disc pl-5">
                  <li>
                    15min. from Songpa interchange of Capital Region First Ring
                    Expressway
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#0a1628]">Metro</p>
                <ul className="mt-1 list-disc pl-5">
                  <li>
                    400m from Munjeong station Exit 3 of 8 Line
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#0a1628]">Bus</p>
                <ul className="mt-1 list-disc pl-5">
                  <li>
                    600m from Munjeong Rodeo Street station (24011, 24012)
                  </li>
                  <li>
                    1000m from Munjeong Legal Complex, Gunyoung Apartment
                    station (24013, 24014)
                  </li>
                  <li>
                    1000m from Songpa Prugio, Hanwha Obelisk station (24496,
                    24497)
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/contact-map.jpg"
              alt="Map near Munjeong, Seoul"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  )
}
