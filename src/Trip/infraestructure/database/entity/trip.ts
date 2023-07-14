import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class TripEntity {
  @PrimaryColumn()
  uuid: string;
  @Column()
  name: string;
  @Column()
  from: string;
  @Column()
  to: string;
  @Column()
  startDate: Date;
  @Column()
  endDate: Date;
  @Column()
  availableSeats: number;
  @Column()
  price: number;
}
