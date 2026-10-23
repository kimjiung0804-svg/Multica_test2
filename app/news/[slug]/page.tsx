import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"

import { getNewsPost, newsPosts } from "@/lib/news"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const params: { slug: string }[] = []
  for (const post of newsPosts) {
    params.push({ slug: post.slug })
    for (const alias of post.aliases) {
      if (!alias.includes("%")) params.push({ slug: alias })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getNewsPost(slug)
  if (!post) return { title: "News" }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.dateIso,
      authors: [post.author],
    },
  }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const post = getNewsPost(slug)
  if (!post) notFound()

  // Normalize Wix / alias URLs to the English canonical slug
  if (slug !== post.slug) {
    redirect(`/news/${post.slug}`)
  }

  return (
    <article className="bg-white">
      <div className="relative isolate min-h-[48vh] overflow-hidden bg-[#0a1628]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          className="animate-hero-ken object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/65 to-[#0a1628]/25" />
        <div className="relative mx-auto max-w-3xl px-4 pb-12 pt-28 sm:px-6">
          <div className="animate-fade-up flex flex-wrap items-center gap-3 text-xs font-semibold tracking-[0.16em] text-[#5E97FF] uppercase">
            <Link href="/news" className="transition-colors hover:text-white">
              ← All Posts
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/55">News</span>
          </div>
          <h1 className="animate-fade-up font-heading mt-4 text-3xl font-semibold tracking-tight text-balance text-white sm:text-5xl [animation-delay:80ms]">
            {post.title}
          </h1>
          <p className="animate-fade-up mt-5 text-sm text-white/70 [animation-delay:140ms]">
            <span className="font-medium text-white/90">{post.author}</span>
            <span className="mx-2 text-white/35">·</span>
            {post.date}
            <span className="mx-2 text-white/35">·</span>
            {post.readTime}
          </p>
          <p className="animate-fade-up mt-2 text-xs text-white/45 [animation-delay:180ms]">
            최종 수정일: {post.modifiedDate}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="relative mb-10 aspect-[3/4] max-h-[520px] overflow-hidden bg-[#f0f2f5] sm:aspect-[4/3]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          {post.body.map((block, index) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={`h-${index}`}
                  className="font-heading pt-4 text-2xl font-semibold tracking-tight text-[#0a1628] sm:text-[1.65rem]"
                >
                  {block.text}
                </h2>
              )
            }
            if (block.type === "quote") {
              return (
                <blockquote
                  key={`q-${index}`}
                  className="border-l-4 border-[#0088CB] bg-[#eef5fb] px-5 py-4 text-base leading-relaxed text-[#0a1628]/85 italic sm:text-lg"
                >
                  “ {block.text} ”
                </blockquote>
              )
            }
            return (
              <p
                key={`p-${index}`}
                className="text-base leading-relaxed text-[#5f6360] sm:text-lg"
              >
                {block.text}
              </p>
            )
          })}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-[#e5e8ec] pt-8">
          <div className="text-sm text-[#5f6360]">
            <span className="text-[#0a1628]/55">Written by </span>
            <span className="font-semibold text-[#0a1628]">{post.author}</span>
          </div>
          <Link
            href="/news"
            className="inline-flex h-10 items-center border border-[#0088CB] px-5 text-sm font-semibold tracking-wide text-[#0088CB] transition-colors duration-300 hover:bg-[#0088CB] hover:text-white"
          >
            All Posts
          </Link>
        </div>
      </div>
    </article>
  )
}
