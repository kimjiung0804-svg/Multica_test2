import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/site"

export const metadata: Metadata = {
  title: "Product",
}

export default function ProductPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="It's a great opportunity to provide information about our products. If you want to get more detail information or customer success story, please contact us."
        image="/images/product-hero.jpg"
        imageAlt="Semiconductor product visualization"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.title}
              className="group flex flex-col overflow-hidden border border-[#e5e8ec] bg-[#fafafa] transition hover:border-[#0088CB]/35 hover:shadow-[0_16px_40px_rgba(10,22,40,0.08)]"
            >
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-heading text-xl font-semibold text-[#0a1628]">
                  {product.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5f6360]">
                  {product.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#0a1628] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold tracking-tight">
              Our Clients
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              If you want to get more detail information or customer success
              story, please contact us.
            </p>
            <Button
              render={<Link href="/contact" />}
              className="btn-primary-motion mt-8 h-11 rounded-none bg-[#0088CB] px-7 text-sm font-semibold tracking-wide text-white"
            >
              Contact Us
            </Button>
          </div>
          <div className="relative aspect-[2/1] overflow-hidden">
            <Image
              src="/images/clients.jpg"
              alt="Our clients"
              fill
              className="object-cover transition duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  )
}
