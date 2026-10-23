export type NewsBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }

export type NewsPost = {
  /** Canonical route slug */
  slug: string
  /** Alternate slugs (original Wix paths, etc.) */
  aliases: string[]
  title: string
  excerpt: string
  author: string
  authorProfileUrl?: string
  date: string
  dateIso: string
  modifiedDate: string
  readTime: string
  image: string
  imageAlt: string
  body: NewsBlock[]
}

export const newsPosts: NewsPost[] = [
  {
    slug: "pad-placement-software",
    aliases: [
      "간편하게-블로그-관리하기",
      "%EA%B0%84%ED%8E%B8%ED%95%98%EA%B2%8C-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0",
    ],
    title: "Development of pad placement software",
    excerpt:
      "Developed electrical design automation software for the efficient PAD placement of system IC based on Artificial Intelligence algorithm....",
    author: "JeongHwan Yoon",
    authorProfileUrl: "https://www.enabledesign.io/profile/jhyoon/profile",
    date: "2022년 5월 12일",
    dateIso: "2022-05-12T01:41:51.856Z",
    modifiedDate: "2022년 5월 17일",
    readTime: "1분 분량",
    image: "/images/news-pad.jpg",
    imageAlt: "Pad placement research visual",
    body: [
      {
        type: "paragraph",
        text: "Developed electrical design automation software for the efficient PAD placement of system IC based on Artificial Intelligence algorithm.",
      },
      { type: "heading", text: "Core Technology" },
      {
        type: "quote",
        text: "By adding a reinforcement learning-based pad placement function to the existing IO pad ring design tool, it is possible to optimize the pad placement that meets the target chip area.",
      },
      {
        type: "paragraph",
        text: "By applying PPO as a reinforcement learning algorithm, an environment that is easy to expand and change is built in consideration of future algorithm improvement and application of new algorithms.",
      },
      {
        type: "paragraph",
        text: "Constructing a neural network that outputs batch action by inputting batch data as input, and developing an optimal action prediction function to determine chip presence through learning.",
      },
      {
        type: "paragraph",
        text: "Developed LEF/DEF input/output parser for commercial P&R tools, a layout design tool, and APD I/O parser for the interface of a commercial package design tool.",
      },
      { type: "heading", text: "Tool Performance" },
      {
        type: "quote",
        text: "Very fast pad placement speed with a satisfaction of the target chip area.",
      },
      {
        type: "paragraph",
        text: "As a result of the final development, the pad placement speed was reduced to less than 0.5 sec per piece, the chip area error rate of the pad placement result compared to the target chip area was lowered by 1.5%, and the interface implementation function of a commercial package design and P&R tools was confirmed.",
      },
      { type: "heading", text: "Application Area" },
      {
        type: "paragraph",
        text: "Applied to chip area prediction in the early design stage in system IC design, confirmation of pad placement possibility in the IO pad ring design stage, and prediction of optimal pad placement results in the silicon virtual prototyping or floor planning stage.",
      },
    ],
  },
]

export function getNewsPost(slug: string): NewsPost | undefined {
  const decoded = (() => {
    try {
      return decodeURIComponent(slug)
    } catch {
      return slug
    }
  })()

  return newsPosts.find(
    (post) =>
      post.slug === slug ||
      post.slug === decoded ||
      post.aliases.includes(slug) ||
      post.aliases.includes(decoded)
  )
}

export function getNewsCanonicalSlug(slug: string): string | undefined {
  return getNewsPost(slug)?.slug
}
