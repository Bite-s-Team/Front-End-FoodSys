import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schema, schemaProps } from "./schema"
import { useCurrent } from "@/hooks/useCurrent"

export const usePayment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  })

  const onNext = useCurrent((state) => state.onNext)

  function handlePayment(data: schemaProps) {
    console.log(data)
    onNext()
  }

  return {
    register,
    handleSubmit,
    handlePayment,
    errors,
  }
}
