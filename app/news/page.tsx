import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { PageHero } from "@/components/page-hero"
import { newsPosts } from "@/lib/site"

export const metadata: Metadata = {
  title: "News",
}

export default function NewsPage() {
  return (
    <>
      <PageHero
        title="News"
        subtitle="Updates from Enable Design System, Inc."
        image="/images/ml-eda.jpg"
        imageAlt="Research news"
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden border border-[#e5e8ec] bg-[#fafafa] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,22,40,0.08)]"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-heading text-xl font-semibold text-[#0a1628]">
                    <Link
                      href={`/news/${post.slug}`}
                      className="transition-colors hover:text-[#0088CB]"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5f6360]">
                    {post.excerpt}
                  </p>
                  <p className="mt-5 text-xs tracking-wide text-[#727272]">
                    {post.author} · {post.date} · {post.readTime}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
