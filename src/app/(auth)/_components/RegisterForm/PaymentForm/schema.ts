import { z } from "zod"

export const schema = z.object({
  name_card: z.string().min(4, "Nome muito curto"),
  number_card: z.string().min(4, "Nome muito curto"),
  date: z.string().min(5, "Data inválida"),
  cv: z.string().min(3, "CV inválido"),
})

export type schemaProps = z.infer<typeof schema>
