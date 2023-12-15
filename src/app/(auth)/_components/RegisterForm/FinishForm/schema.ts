import { z } from "zod";

export const schema = z
  .object({
    nick: z.string().min(4, "Nick muito curto"),
    password: z.string().min(6, "Senha muito curta"),
    confirmPassword: z.string().min(6, "As senhas precisam estar iguais!"),
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "As senhas precisam estar iguais!",
      path: ["confirmPassword"],
    }
  );

export type schemaProps = z.infer<typeof schema>;
