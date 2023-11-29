import { Input } from "@/components/ui/Input";
import { useRegister } from "./useRegister";

export default function BasicForm() {

    const {register, handleSubmit, errors} = useRegister();

    return(
        <form className="flex flex-col gap-3"

        >
            <Input
                placeholder="Nome"
                type='text'
                {...register('name')}
                error={errors.name?.message}
            />
            <Input
                placeholder="Email"
                type='email'
                {...register('email')}
                error={errors.email?.message}
            />
            <Input
                placeholder="Data de Aniversario"
                type='date'
                {...register('birthday')}
                error={errors.birthday?.message}
            />
        </form>
    )
}