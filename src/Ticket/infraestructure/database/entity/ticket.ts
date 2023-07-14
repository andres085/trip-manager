import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class TicketEntity {
  @PrimaryColumn()
  uuid: string;
  @Column()
  passengerName: string;
  @Column()
  passengerLastname: string;
  @Column()
  passengerIdent: string;
  @Column()
  tripId: string;
  @Column()
  tripName: string;
  @Column()
  tripStartDate: Date;
  @Column()
  tripEndDate: Date;
  @Column()
  createdAt: Date;
  @Column()
  updatedAt: Date;
}
