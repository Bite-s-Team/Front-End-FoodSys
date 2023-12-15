import { useForm } from "react-hook-form"
import { schema, schemaProps } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCurrent } from "@/hooks/useCurrent"

export const useBasic = () => {
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

  function handleBasic(data: schemaProps) {
    console.log(data)
    onNext()
  }

  return {
    register,
    handleSubmit,
    handleBasic,
    errors,
  }
}
