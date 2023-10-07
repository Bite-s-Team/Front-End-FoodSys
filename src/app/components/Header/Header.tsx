import Link from "next/link"

export default function Header(){
    return(
        <nav>
            <ul className="flex gap-2">
                <Link href='/'>
                    <li>
                        Home
                    </li>
                </Link>
                <Link href='/Pages/About'>
                    <li>
                        About
                    </li>
                </Link>
            </ul>
        </nav>
    )
}