import z from "zod";

export const NewUserSchema = z.object({
  name: z.string().min(2).max(100),
});

export type NewUserInput = z.infer<typeof NewUserSchema>;
