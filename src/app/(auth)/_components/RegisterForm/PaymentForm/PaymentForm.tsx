import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { useCurrent } from "@/hooks/useCurrent";

export default function PaymentForm() {
  const [onNext, onPrev] = useCurrent((state) => [state.onNext, state.onPrev]);

  return (
    <form className="flex flex-col gap-3" onSubmit={() => onNext()}>
      <div className="flex flex-col gap-3">
        <Label>Nome do Cartao</Label>
        <Input placeholder="Nome do Cartão" type="text" />
        <Label>Numero do Cartao</Label>
        <Input placeholder="Número do Cartão" type="text" />
        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            <Label>Data de Validade</Label>
            <Input placeholder="mm/yy" type="text" />
          </div>
          <div className="flex flex-col gap-3">
            <Label>CVC / CVS</Label>
            <Input placeholder="123" type="text" />
          </div>
        </div>
      </div>
      <div className="flex gap-20">
        <Button type="submit">Salvar e continuar</Button>
        <Button variant="link" onClick={onPrev}>
          Adicionar mais tarde
        </Button>
      </div>
    </form>
  );
}
