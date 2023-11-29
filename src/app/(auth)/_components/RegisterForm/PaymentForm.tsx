import { Input } from "@/components/ui/Input";
import { useRegister } from "./useRegister";

export default function PaymentForm() {

    const {register, handleSubmit, errors} = useRegister();

    return(
        <form className="flex flex-col gap-3">
            <Input
                placeholder="Endereço"
                type='text'
                {...register('address')}
                error={errors.address?.message}
            />
            <Input
                placeholder="CPF"
                type='text'
                {...register('cpf')}
                error={errors.cpf?.message}
            />
            <Input
                placeholder="Telefone"
                type='text'
                {...register('phone')}
                error={errors.phone?.message}
            />
        </form>
    )
}