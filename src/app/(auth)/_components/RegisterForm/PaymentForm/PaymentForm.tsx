import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { useCurrent } from "@/hooks/useCurrent";
import { usePayment } from "./usePayment";

export default function PaymentForm() {
  const [onNext, onPrev] = useCurrent((state) => [state.onNext, state.onPrev]);
  const { register, handleSubmit, handlePayment, errors } = usePayment();

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={handleSubmit(handlePayment)}
    >
      <div className="flex flex-col gap-3">
        <Label>Nome do Cartao</Label>
        <Input
          placeholder="Nome do Cartão"
          type="text"
          {...register("name_card")}
          error={errors.name_card?.message}
        />
        <Label>Numero do Cartao</Label>
        <Input
          placeholder="Número do Cartão"
          type="text"
          {...register("number_card")}
          error={errors.number_card?.message}
        />
        <div className="flex gap-6">
          <div className="flex flex-col gap-3">
            <Label>Data de Validade</Label>
            <Input
              placeholder="mm/yy"
              type="text"
              {...register("date")}
              error={errors.date?.message}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label>CVC / CVS</Label>
            <Input
              placeholder="123"
              type="text"
              {...register("cv")}
              error={errors.cv?.message}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-4">
          <Button onClick={onPrev}>Voltar</Button>
          <Button type="submit">Salvar e continuar</Button>
        </div>
        <Button variant="link" onClick={onNext}>
          Adicionar mais tarde
        </Button>
      </div>
    </form>
  );
}
