import { ReactNode } from "react"

export function FoodCardsContainer({ children }: { children: ReactNode }) {
  return (
    <section className="m-auto flex max-w-screen-2xl flex-wrap items-center justify-around gap-4 px-6">
      {children}
    </section>
  )
}
