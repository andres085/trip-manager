import { z } from "zod";
export const UserDtoSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  address: z.string(),
  userName: z.string(),
  password: z.string(),
  email: z.string(),
  age: z.number(),
});

export type UserDto = z.infer<typeof UserDtoSchema>;
