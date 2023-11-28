import { ReactNode } from "react";

export function FoodCardContainer({children}:{children:ReactNode}){

  return (
    <div className="flex flex-col items-start w-auto">
      {children}
    </div>
  )
}
