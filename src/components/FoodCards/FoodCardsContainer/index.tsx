import { ReactNode } from "react";

export function FoodCardsContainer({children}:{children:ReactNode}){

  return (
    <section className="flex items-center justify-around gap-4 flex-wrap max-w-screen-2xl m-auto px-6">
      {children}
    </section>
  )
}
