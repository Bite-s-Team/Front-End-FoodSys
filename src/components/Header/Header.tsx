import Navlink from "../Navlink/Navlink"

export default function Header() {
    return (
        <>
            <div className="flex justify-between mx-7">
                <h1 className="text-4xl">Logo</h1>
                <ul className="flex gap-2">
                    <Navlink />
                </ul>
            </div>
        </>
    )
}