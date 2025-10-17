import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .max(32, "Name must be at most 32 characters.")
    .optional()
    .or(z.literal(""))
    .refine((val) => !val || val.length >= 3, {
      message: "Name must be at least 3 characters if provided.",
    }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(500, "Message must be at most 500 characters."),
});
