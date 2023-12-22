import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema, schemaProps } from "./schema"
import { useCurrent } from "@/hooks/useCurrent"

export const usePayment = () => {
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

  const onNext = useCurrent((state) => state.onNext)

  function handlePayment(data: schemaProps) {
    localStorage.setItem("step2", JSON.stringify(data))
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
