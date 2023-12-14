import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function FinishForm() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-bold">Concluir Cadastro</h1>
      <form className="flex flex-col gap-6">
        <Input type="text" placeholder="Digite seu nick" />
        <Input type="password" placeholder="Digite sua senha" />
        <Input type="password" placeholder="Confirme sua senha" />
        <div className="flex flex-col gap-3">
          <Button>Voltar</Button>
          <Button type="submit">Finalizar cadastro</Button>
        </div>
      </form>
    </div>
  );
}
