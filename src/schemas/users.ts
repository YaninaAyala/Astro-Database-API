import { z } from "zod";

const usersSchema = z.object({
  name: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo STRING",
      required_error: "El nombre es requerido",
    })
    .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
    .max(255, {
      message: "La descripción tiene que tener como MÁXIMO 255 caracteres",
    }),
  email: z
    .string({ required_error: "La propiedad email es obligatoria" })
    .email(),
});

export function validator(data){
  return usersSchema.safeParse(data)

}
