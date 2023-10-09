import { ComponentProps, ReactNode } from "react"

type BtnProps = ComponentProps<'button'> & {
    name?: string,
    icon?: ReactNode,
    style?: string,
    hover?: string,
    func?: () => void,
}

export default function Button({ name, style, hover }: BtnProps) {
    return (
        <button
            className={`flex justify-center items-center py-1 px-4 border-2 rounded-md border-black ${style} ${hover}`}
        >
            {name}
        </button>
    )
}