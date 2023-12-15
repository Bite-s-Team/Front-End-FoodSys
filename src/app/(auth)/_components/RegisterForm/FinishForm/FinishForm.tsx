import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { useCurrent } from "@/hooks/useCurrent"
import { useFinish } from "./useFinish"

export default function FinishForm() {
  const { register, handleSubmit, handleFinish, errors } = useFinish()
  const onPrev = useCurrent((state) => state.onPrev)

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold">Concluir Cadastro</h1>
      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(handleFinish)}
      >
        <Input
          type="text"
          placeholder="Digite seu nick"
          {...register("nick")}
          error={errors.nick?.message}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
          error={errors.password?.message}
        />
        <Input
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
        <div className="flex flex-col gap-3">
          <Button onClick={onPrev}>Voltar</Button>
          <Button type="submit">Finalizar cadastro</Button>
        </div>
      </form>
    </div>
  )
}
