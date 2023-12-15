"use client"

import Image from "next/image"
import Link from "next/link"
import Stepper from "../_components/CurrentSteps/stepper"
import RegisterForm from "../_components/RegisterForm/RegisterForm"

export default function SignUp() {
  return (
    <>
      <header className="mx-3 mt-3 flex items-center justify-between">
        <Image src="/logo.svg" width={150} height={150} alt="logo bites" />
        <p className="text-sm font-semibold">
          Ja possui uma conta?
          <span className="text-orange-400">
            <Link href="/login" className="hover:underline">
              {" "}
              Faca o login!
            </Link>
          </span>
        </p>
      </header>
      <section className="flex w-full flex-col">
        <div className=" flex w-full justify-center">
          <h1 className="text-2xl font-bold">Cadastrar</h1>
        </div>
        <div className="flex justify-center">
          <Stepper />
        </div>
        <div className="mt-10 flex items-center justify-center">
          <RegisterForm />
        </div>
      </section>
    </>
  )
}
