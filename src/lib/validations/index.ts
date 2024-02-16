// this will store all the form validations
import { z } from "zod";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2, { message: "" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});

// === POST VALIDATIONS ===
export const PostValidation = z.object({
  caption: z.string().min(5).max(2200),
  location: z.string().min(5).max(2200),
  file: z.custom<File[]>(),
  tags: z.string(),
});
