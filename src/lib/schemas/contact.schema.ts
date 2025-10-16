import * as z from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(32, "Name must be at most 32 characters."),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(1000, "Message must be at most 1000 characters."),
});
