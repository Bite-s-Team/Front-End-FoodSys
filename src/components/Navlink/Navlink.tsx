import Link from "next/link"
import { ReactNode } from "react";

//import icon
import { AiOutlineShoppingCart } from 'react-icons/ai'

type linkProps = {
    id?: number,
    name?: string,
    path?: string,
    icon?: ReactNode,
}[]

const link: linkProps = [
    {
        id: 1,
        name: 'Home',
        path: '/',
    },
    {
        id: 2,
        name: 'About Us',
        path: '/Pages/About',
    },
    {
        id: 3,
        name: 'Blog',
        path: '/Pages/Blog',
    },
    {
        id: 4,
        name: 'Contact Us',
        path: '/Pages/Contact',
    },
    {
        id: 4,
        icon: <AiOutlineShoppingCart />,
    },

]

export default function Navlink() {
    return (
        <>
            {link.map(
                (l) => {
                    return (
                        <Link key={l.id} href={`${l.path}`}>
                            <li className="text-lg">
                                {l.icon} {l.name}
                            </li>
                        </Link>
                    )
                }
            )}

        </>
    )
}