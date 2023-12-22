import { useCurrent } from "@/app/store/useCurrent"

export default function Stepper() {
  const atualStep = useCurrent((state) => state.step)

  const step = [
    {
      id: 1,
      text: "Detalhes Básicos",
    },
    {
      id: 2,
      text: "Detalhes de Pagamento",
    },
    {
      id: 3,
      text: "Concluir cadastro",
    },
  ]

  return (
    <div className="mx-4 ml-[15rem] flex w-[60%] items-center justify-between p-4">
      {step.map((l) => (
        <div key={l.id} className="flex w-full items-center">
          <div className="relative flex flex-col items-center ">
            <div
              className={`${
                atualStep == l.id ? "bg-orange-400 text-white" : "bg-zinc-200"
              } 
                            ease-in-outh-12 flex w-12 items-center justify-center rounded-full  py-3 
                            transition duration-500`}
            >
              {l.id}
            </div>
            <div className="absolute top-0 mt-16 w-48 text-center">
              {l.text}
            </div>
          </div>
          <div
            className={`${
              l.id == 3 ? "hidden" : "flex-auto"
            } mx-8 border-t-2 transition duration-500 ease-in-out`}
          ></div>
        </div>
      ))}
    </div>
  )
}
