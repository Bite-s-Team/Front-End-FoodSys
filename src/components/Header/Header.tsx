import Button from "../Button/Button"
import Navlink from "../Navlink/Navlink"

export default function Header() {
    return (
        <>
            <div className="flex justify-between mx-7">
                <h1 className="text-4xl">Logo</h1>
                <ul className="flex gap-6">
                    <Navlink />
                    <Button
                        name="Sign Up"
                        style='bg-black text-white'
                        hover="hover:bg-white hover:text-black"
                    />
                    <Button
                        name="Login"
                        style='bg-white text-black'
                        hover="hover:bg-black hover:text-white"
                    />
                </ul>
            </div>
        </>
    )
}