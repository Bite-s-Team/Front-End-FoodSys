import { useCurrent } from "@/hooks/useCurrent";



export default function Stepper() {

    const atualStep = useCurrent((state) => state.step)

    const step = [
        {
            id: 1,
            text:'Detalhes Básicos'
        },
        {
            id: 2,
            text:'Detalhes de Pagamento'
        },
        {
            id: 3,
            text:'Concluir cadastro'
        },
    ];

    return(
        <div className="mx-4 ml-[15rem] p-4 flex justify-between items-center w-[60%]">
            {step.map((l) => (
                <div key={l.id} className="w-full flex items-center">
                    <div className="relative flex flex-col items-center ">
                            <div className={`${atualStep == l.id ? 'bg-orange-400 text-white' : 'bg-zinc-200'} 
                            rounded-full transition duration-500 ease-in-outh-12 w-12 flex  items-center 
                            justify-center py-3`}>
                                {l.id}
                            </div>
                            <div className="absolute top-0 text-center mt-16 w-48">
                                {l.text}
                            </div>
                    </div>
                    <div className={`${l.id == 3 ? 'hidden' : 'flex-auto'} mx-8 border-t-2 transition duration-500 ease-in-out`}>

                    </div>
            </div>
            ))}
        </div>
    )
}