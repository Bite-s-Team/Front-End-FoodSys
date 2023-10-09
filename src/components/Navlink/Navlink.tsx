import Link from "next/link"

type linkProps = {
    id?: number,
    name?: string,
    path?: string,
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

]

export default function Navlink() {
    return (
        <>
            {link.map(
                (l) => {
                    return (
                        <Link key={l.id} href={`${l.path}`}>
                            <li className="text-lg">
                                {l.name}
                            </li>
                        </Link>
                    )
                }
            )}

        </>
    )
}