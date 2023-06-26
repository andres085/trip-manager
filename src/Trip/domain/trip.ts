export type Trip = {
  uuid: string;
  name: string;
  from: string;
  to: string;
  startDate: Date;
  endDate: Date;
  availableSeats: number;
  price: number;
};
