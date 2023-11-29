import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<div>
  <p>Khang Hello World!</p>
  <Link href="/LoginPage">LoginPage</Link>
  <Link href="/SignUpPage">SignUpPage</Link>
</div>
    </main>
  )
}
