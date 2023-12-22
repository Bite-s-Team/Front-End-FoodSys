import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema, schemaProps } from "./schema"
import { useRouter } from "next/navigation"
import { useCurrent } from "@/hooks/useCurrent"

export const useFinish = () => {
  const router = useRouter()
  const onReset = useCurrent((state) => state.onReset)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  })

  function handleFinish(data: schemaProps) {
    const step1Data = localStorage.getItem("step1")
    const step2Data = localStorage.getItem("step2")

    console.log(data, step1Data, step2Data)

    localStorage.clear()
    router.push("/")
    onReset()
  }

  return {
    register,
    handleSubmit,
    handleFinish,
    errors,
  }
}
