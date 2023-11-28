import Image from "next/image"
import Link from "next/link"

export default function SignUp() {
    return(
       <>
            <header className="flex justify-between items-center mx-3 mt-3">
                <Image src='/logo.svg' width={150} height={150} alt='logo bites' />
                <p className="font-semibold text-sm">
                    Ja possui uma conta?
                    <span className="text-orange-400">
                        <Link href='/login' className="hover:underline"> Faca o login!</Link>
                    </span>
                </p>
            </header>
            <section className="w-full">
                <div className="w-full flex justify-center">
                    <h1 className="text-2xl font-bold">Cadastrar</h1>
                </div>
            </section>
       </>
    )
}