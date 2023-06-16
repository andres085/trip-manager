export type Ticket = {
  uuid: string;
  passengerName: string;
  passengerLastname: string;
  passengerIdent: string;
  tripId: string;
  tripName: string;
  tripStartDate: Date;
  tripEndDate: Date;
  createdAt: Date;
  updatedAt: Date;
};
