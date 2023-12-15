import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, schemaProps } from "./schema";

export const useFinish = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<schemaProps>({
    mode: "onBlur",
    criteriaMode: "all",
    resolver: zodResolver(schema),
  });

  function handleFinish(data: schemaProps) {
    console.log(data);
  }

  return {
    register,
    handleSubmit,
    handleFinish,
    errors,
  };
};
