import * as React from "react"
import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, icon, ...props }, ref) => {
    return (
      <>
        <div className="flex items-center justify-start rounded bg-zinc-200 pl-1 focus-within:border focus-within:border-black/50 focus-within:shadow-sm">
          {icon}
          <input
            type={type}
            className={cn("rounded-lg bg-zinc-200 p-2 outline-none", className)}
            ref={ref}
            {...props}
          />
        </div>
        {error && <p className="text-sm italic text-destructive">{error}</p>}
      </>
    )
  }
)
Input.displayName = "Input"
