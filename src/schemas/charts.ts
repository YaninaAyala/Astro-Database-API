import { z } from "zod";

const chartsSchema = z.object({
  name: z
    .string({
      invalid_type_error: "El nombre debe ser de tipo STRING",
      required_error: "El nombre es requerido",
    })
    .min(3, { message: "El nombre tiene que tener como MÍNIMO 3 caracteres" })
    .max(255, {
      message: "La descripción tiene que tener como MÁXIMO 255 caracteres",
    }),
  birthdate: z.date({
    required_error: "La propiedad birthdate es obligatoria",
  }),

  time: z
  .number()
  .min(0, { message: "La propiedad tiene como minimo 0" })
  .max(2359, { message: "La propiedad tiene como maximo 360" }),


  asc: z
    .number()
    .min(0, { message: "La propiedad tiene como minimo 0" })
    .max(360, { message: "La propiedad tiene como maximo 360" }),

  sun: z
    .number()
    .min(0, { message: "La propiedad tiene como minimo 0" })
    .max(360, { message: "La propiedad tiene como maximo 360" }),

  moon: z
    .number()
    .min(0, { message: "La propiedad tiene como minimo 0" })
    .max(360, { message: "La propiedad tiene como maximo 360" }),

  mercury: z
    .number()
    .min(0, { message: "La propiedad tiene como minimo 0" })
    .max(360, { message: "La propiedad tiene como maximo 360" }),

  venus: z
    .number()
    .min(0, { message: "La propiedad tiene como minimo 0" })
    .max(360, { message: "La propiedad tiene como maximo 360" }),

  mars: z
    .number()
    .min(0, { message: "La propiedad tiene como minimo 0" })
    .max(360, { message: "La propiedad tiene como maximo 360" }),

  jupiter: z
    .number()
    .min(0, { message: "La propiedad tiene como minimo 0" })
    .max(360, { message: "La propiedad tiene como maximo 360" }),

  saturn: z
    .number()
    .min(0, { message: "La propiedad tiene como minimo 0" })
    .max(360, { message: "La propiedad tiene como maximo 360" }),

  uranus: z
    .number()
    .min(0, { message: "La propiedad tiene como minimo 0" })
    .max(360, { message: "La propiedad tiene como maximo 360" }),

  neptune: z
    .number()
    .min(0, { message: "La propiedad tiene como minimo 0" })
    .max(360, { message: "La propiedad tiene como maximo 360" }),

  pluto: z
    .number()
    .min(0, { message: "La propiedad tiene como minimo 0" })
    .max(360, { message: "La propiedad tiene como maximo 360" }),
});

export function validator(data) {
  return chartsSchema.safeParse(data);
}
