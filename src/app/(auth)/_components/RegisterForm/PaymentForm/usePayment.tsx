import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema, schemaProps } from "./schema"
import { useCurrent } from "@/app/store/useCurrent"
import { useData } from "@/app/store/useData"

export const usePayment = () => {
  const onNext = useCurrent((state) => state.onNext)
  const setFormData = useData((state) => state.setFormData2)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<schemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  })

  function handlePayment(data: schemaProps) {
    setFormData(data)
    onNext()
  }

  return {
    register,
    handleSubmit,
    setValue,
    handlePayment,
    errors,
  }
}
