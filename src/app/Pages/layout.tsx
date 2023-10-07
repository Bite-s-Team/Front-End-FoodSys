import { ReactNode } from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

type layoutProps = {
    children: ReactNode
}

export default function Layout({children}:layoutProps) {
    return(
        <div>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}