import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { PageHero } from "@/components/page-hero"
import { newsPosts } from "@/lib/news"

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

      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-[#e5e8ec] pb-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[#0088CB] uppercase">
                Blog
              </p>
              <h2 className="font-heading mt-1 text-2xl font-semibold text-[#0a1628]">
                All Posts
              </h2>
            </div>
            <p className="text-sm text-[#727272]">
              {newsPosts.length} post{newsPosts.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {newsPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/news/${post.slug}`}
                className="group flex flex-col overflow-hidden border border-[#e5e8ec] bg-[#fafafa] transition duration-300 hover:-translate-y-1.5 hover:border-[#0088CB]/35 hover:shadow-[0_18px_44px_rgba(10,22,40,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0088CB]"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-[#e8eef5]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-semibold text-[#0a1628] transition-colors group-hover:text-[#0088CB]">
                    {post.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5f6360]">
                    {post.excerpt}
                  </p>
                  <p className="mt-5 text-xs tracking-wide text-[#727272]">
                    {post.author}
                    <span className="mx-1.5 text-[#c0c0c0]">·</span>
                    {post.date}
                    <span className="mx-1.5 text-[#c0c0c0]">·</span>
                    {post.readTime}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-[#0088CB] transition-transform duration-300 group-hover:translate-x-1">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
