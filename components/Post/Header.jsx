import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl tracking-tight md:tracking-tighter leading-tight mb-20 mt-16">
      <Link href="/">
        <span className="hover:underline">Blog</span>
      </Link>
      .
    </h2>
  )
}
