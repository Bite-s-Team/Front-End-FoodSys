import Header from "./_components/Header";

export default function LayoutHome({children}: {children: React.ReactNode}) {
    return(
        <div>
            <Header/>
            {children}
        </div>
    )
}