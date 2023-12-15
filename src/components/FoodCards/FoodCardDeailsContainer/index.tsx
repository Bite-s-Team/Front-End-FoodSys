import { ReactNode } from "react"

export function FoodCardDetailsContainer({
  children,
}: {
  children: ReactNode
}) {
  return <div className="flex w-full justify-between p-3">{children}</div>
}
