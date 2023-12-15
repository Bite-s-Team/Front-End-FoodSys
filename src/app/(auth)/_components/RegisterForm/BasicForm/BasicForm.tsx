import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/label"
import { useBasic } from "./useBasic"

export default function BasicForm() {
  const { register, handleSubmit, handleBasic, errors } = useBasic()

  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold">Detalhes Básicos</h1>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(handleBasic)}
      >
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            <Label>Seu Nome completo</Label>
            <Input
              placeholder="Nome"
              type="text"
              {...register("name")}
              error={errors.name?.message}
            />
            <Label>Endereco de email</Label>
            <Input
              placeholder="Email"
              type="email"
              {...register("email")}
              error={errors.email?.message}
            />
            <Label>Seu Aniversario</Label>
            <Input
              placeholder="Data de Aniversario"
              type="date"
              {...register("birthday")}
              error={errors.birthday?.message}
            />
            <Label>Seu endereço</Label>
            <Input
              placeholder="Endereço"
              type="text"
              {...register("address")}
              error={errors.address?.message}
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label>Seu CPF</Label>
            <Input
              placeholder="CPF"
              type="text"
              {...register("cpf")}
              error={errors.cpf?.message}
            />
            <Label>Telefone</Label>
            <Input
              placeholder="Telefone"
              type="text"
              {...register("phone")}
              error={errors.phone?.message}
            />
          </div>
        </div>
        <Button>Salvar e continuar</Button>
      </form>
    </div>
  )
}
