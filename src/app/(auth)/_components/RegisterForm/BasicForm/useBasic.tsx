import { useForm } from "react-hook-form"
import { schema, schemaProps } from "./schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCurrent } from "@/app/store/useCurrent"
import { useData } from "@/app/store/useData"

export const useBasic = () => {
  const setFormData = useData((state) => state.setFormData1)
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

  function handleBasic(data: schemaProps) {
    setFormData(data)
    onNext()
  }

  return {
    register,
    handleSubmit,
    setValue,
    handleBasic,
    errors,
  }
}
