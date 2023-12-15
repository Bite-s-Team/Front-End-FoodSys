"use client"

import { Button } from "@/components/ui/Button"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const link = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Delivery",
    path: "/delivery",
  },
  {
    id: 3,
    name: "Sobre Nos",
    path: "/about",
  },
  {
    id: 4,
    name: "Fale Conosco",
    path: "/contact",
  },
]

export default function Header() {
  const activePath = usePathname()
  const router = useRouter()

  return (
    <nav className="mx-3 mt-4 flex justify-between">
      <div className="flex items-center justify-center gap-4">
        <Image src="/logo.svg" width={150} height={150} alt="logo bites" />
        {link.map((l) => (
          <Link
            className={`${
              activePath === l.path ? "text-orange-400" : "text-black"
            } font-semibold`}
            key={l.id}
            href={l.path}
          >
            {l.name}
          </Link>
        ))}
      </div>
      <div>
        <Button variant="link" onClick={() => router.push("/signup")}>
          Criar conta
        </Button>
        <Button size="xl" onClick={() => router.push("/login")}>
          Login
        </Button>
      </div>
    </nav>
  )
}
