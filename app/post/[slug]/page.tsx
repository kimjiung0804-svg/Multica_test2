import { redirect, notFound } from "next/navigation"

import { getNewsPost, newsPosts } from "@/lib/news"

type Props = { params: Promise<{ slug: string }> }

/** Compatibility route for original Wix URLs: /post/<slug> → /news/<canonical> */
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

export default async function LegacyPostRedirect({ params }: Props) {
  const { slug } = await params
  const post = getNewsPost(slug)
  if (!post) notFound()
  redirect(`/news/${post.slug}`)
}
