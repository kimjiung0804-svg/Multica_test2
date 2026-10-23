import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { newsPosts } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = newsPosts.find((p) => p.slug === slug)
  return { title: post?.title ?? "News" }
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params
  const post = newsPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <article className="bg-white">
      <div className="relative isolate min-h-[42vh] overflow-hidden bg-[#0a1628]">
        <Image
          src={post.image}
          alt=""
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/60 to-transparent" />
        <div className="relative mx-auto max-w-3xl px-4 pb-12 pt-28 sm:px-6">
          <Link
            href="/news"
            className="text-xs font-semibold tracking-[0.18em] text-[#5E97FF] uppercase"
          >
            ← News
          </Link>
          <h1 className="font-heading mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-white/70">
            {post.author} · {post.date} · {post.readTime}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <p className="text-base leading-relaxed text-[#5f6360] sm:text-lg">
          {post.excerpt}
        </p>
        <p className="mt-6 text-base leading-relaxed text-[#5f6360] sm:text-lg">
          Enable Design System, Inc. continues to invest in AI-driven electrical
          design automation. This release focuses on efficient PAD placement for
          system ICs, combining reinforcement-learning strategies with layout
          tooling so design teams can reach area and rule targets faster.
        </p>
        <p className="mt-6 text-base leading-relaxed text-[#5f6360] sm:text-lg">
          For demos, licensing, or partnership inquiries, contact{" "}
          <a
            href="mailto:info@enabledesign.io"
            className="font-medium text-[#0088CB] hover:underline"
          >
            info@enabledesign.io
          </a>
          .
        </p>
      </div>
    </article>
  )
}
