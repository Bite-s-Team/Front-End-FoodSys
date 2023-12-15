import { ReactNode } from "react"

export function FoodCardContainerShadow({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-80 flex-col items-start overflow-hidden rounded-md shadow-shadowCard">
      {children}
    </div>
  )
}
