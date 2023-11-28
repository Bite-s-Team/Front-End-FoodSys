import * as React from "react"
import { ReactNode } from "react";

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode,
    error?: string,
  }

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, icon, ...props }, ref) => {
    return (
      <div className="pl-1 flex items-center justify-start bg-background rounded focus-within:shadow-sm focus-within:border focus-within:border-black/50">
        {icon}
        <input
            type={type}
            className={cn(
            "p-2 bg-background rounded-lg outline-none",
            className
            )}
            ref={ref}
            {...props}
            />
            {error && <p className='text-destructive text-sm italic'>{error}</p>}
        </div>
    )
  }
)
Input.displayName = "Input"