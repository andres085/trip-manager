import { z } from "zod";
export const TripDtoSchema = z.object({
  name: z.string(),
  from: z.string(),
  to: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  availableSeats: z.number(),
  price: z.number(),
});

export type UserDto = z.infer<typeof TripDtoSchema>;
