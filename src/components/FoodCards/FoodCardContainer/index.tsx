import { ReactNode } from "react"

export function FoodCardContainer({ children }: { children: ReactNode }) {
  return <div className="flex w-auto flex-col items-start">{children}</div>
}
