import { ReactNode } from "react";

export function FoodCardContainerShadow({children}:{children:ReactNode}){

  return (
    <div className="flex flex-col items-start w-80 shadow-shadowCard rounded-md overflow-hidden">
      {children}
    </div>
  )
}
