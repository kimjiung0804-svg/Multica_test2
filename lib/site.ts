export const site = {
  name: "Enable Design System, Inc.",
  shortName: "Enable Design",
  tagline: "Electronic Design Automation Solution based on Artificial Intelligence",
  description:
    "인에이블디자인시스템 반도체 설계 자동화 EDA Electronic Design Automation 인공지능 AI Artificial Intelligence 머신러닝 ML Machine Learning",
  phone: "+82-2-3012-8831",
  fax: "+82-2-3012-8832",
  email: "info@enabledesign.io",
  address:
    "C-910, Munjeong Hyundai Knowledge Industry Complex, 7, Beobwon-ro 11-gil, Songpa-gu, Seoul, Republic of Korea (05836)",
  addressShort:
    "C-910, Munjeong Hyundai Knowledge Industry Complex, 7, Beobwon-ro 11-gil, Songpa-gu, Seoul, Republic of Korea",
  copyright: "© copyright by Enable Design System, Inc.",
} as const

export const navItems = [
  { href: "/", label: "HOME" },
  { href: "/solution", label: "SOLUTION" },
  { href: "/product", label: "PRODUCT" },
  { href: "/company", label: "COMPANY" },
  { href: "/news", label: "NEWS" },
  { href: "/contact", label: "CONTACT" },
] as const

export const homeServices = [
  {
    title: "AI based EDA tool development",
    body: "High-performance, low-power, and high-capacity chips can be implemented at low cost according to various platforms and architectures required for AI-based chip design",
  },
  {
    title: "Consulting on EDA environment and software development",
    body: "We can provide the consulting through our foundation technology for EDA development",
  },
  {
    title: "Building a full customized EDA environment",
    body: "We can be tailored to specific customer needs, using our technology to ensure an easy adoption within your company.",
  },
  {
    title: "Training for EDA tools and software development",
    body: "Our experts give the in-depth training of design methodology and EDA tools as well as software development for your company",
  },
] as const

export const solutions = [
  {
    title: "Artificial Intelligence based EDA tool development and sales",
    body: "Machine learning technology is applied to semiconductor design software that relies on existing deterministic algorithms. High-performance, low-power, and high-capacity semiconductors can be implemented at low cost according to various platforms and architectures required for AI-based chip design. This gives our customers an innovative foothold in the marketplace.",
    image: "/images/solution-1.jpg",
  },
  {
    title: "Building a full customized EDA environment",
    body: "EDA environment has a lot of particularities not only based on the technology or the EDA tool but also on each customer. Enable Design System, Inc. can be tailored to specific customer needs, using our technology to ensure an easy adoption within your company.",
    image: "/images/solution-2.jpg",
  },
  {
    title: "Consulting on EDA environment and software development",
    body: "We can provide the consulting through our foundation technology for EDA development such as technology for standard design data input/output of semiconductor, interface technology for commercial EDA tools, application technology for Open Access (OA) database, and Qt-based graphical user interface implementation technology.",
    image: "/images/circuit.jpg",
  },
  {
    title: "Training for EDA tools and software development",
    body: "Most members are over 25 years experts in semiconductor EDA area and we can give the deep dive training of design methodology and EDA tools as well as software development for your company.",
    image: "/images/ml-eda.jpg",
  },
] as const

export const products = [
  {
    title: "IO Planner",
    body: "This is a machine learning based IO placement optimization tool. GUI based visualization of pad placement and IO ring has built up. As a result of initial IO placement, the size of design circuit is predicted.",
    image: "/images/product-io.png",
  },
  {
    title: "AI-based Pad Placer",
    body: "This AI-based pad placement engine is implemented reinforcement learning-based algorithm and layout functions for pad placement that meet the target chip area and design rules.",
    image: "/images/product-pad.png",
  },
  {
    title: "LDRC",
    body: "LDRC stands for Logical Design Rule Checker. This is a full customized tool and validates the library for violations of design rules specified as default inputs of Verilog netlist and liberty library.",
    image: "/images/product-ldrc.png",
  },
  {
    title: "Wafer Test Utility",
    body: "This provides an environment for the analysis of wafer test results: (1) integrated fail log, (2) time set list described in vector file, (3) modified vector file output.",
    image: "/images/product-wafer.png",
  },
] as const

export { newsPosts, getNewsPost } from "@/lib/news"
