import { useForm } from "react-hook-form"
import { schema } from "./Schema"
import { zodResolver } from "@hookform/resolvers/zod"


export const useRegister = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: 'onBlur',
        criteriaMode: 'all',
        resolver: zodResolver(schema),
        defaultValues: {
            name: '',
            email: '',
            birthday: '',
            address: '',
            cpf: '',
            phone: '',
        },
    });

    return {
        register,
        handleSubmit,
        errors,
    }
}