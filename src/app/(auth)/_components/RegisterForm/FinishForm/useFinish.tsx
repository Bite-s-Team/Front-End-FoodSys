import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema, schemaProps } from "./schema"
import { useRouter } from "next/navigation"
import { useCurrent } from "@/app/store/useCurrent"
import { useData } from "@/app/store/useData"

export const useFinish = () => {
  const onReset = useCurrent((state) => state.onReset)
  const resetFormData = useData((state) => state.setResetFormData)
  const step1Data = useData((state) => state.formData1)
  const step2Data = useData((state) => state.formData2)
  const router = useRouter()

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
    console.log(data, step1Data, step2Data)

    router.push("/")
    onReset()
    resetFormData()
  }

  return {
    register,
    handleSubmit,
    handleFinish,
    errors,
  }
}
