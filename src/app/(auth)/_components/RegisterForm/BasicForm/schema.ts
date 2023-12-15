import { z } from "zod"

export const schema = z.object({
  name: z.string().min(6, "nome é muito pequeno"),
  email: z.string().email("O email não é válido"),
  birthday: z.string().min(8, "A data não é válida"),
  address: z.string().min(6, "endereço é muito pequeno"),
  cpf: z
    .string()
    .min(3, "CPF muito curto")
    .refine((data) => !/[a-z A-Z]+/.test(data), {
      message: "Digite somente números",
    }),
  phone: z
    .string()
    .min(3, "Número muito curto")
    .refine((data) => !/[a-z A-Z]+/.test(data), {
      message: "Digite somente números",
    }),
})

export type schemaProps = z.infer<typeof schema>
