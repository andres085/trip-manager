import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class UserEntity {
  @Column()
  name: string;
  @Column()
  lastName: string;
  @PrimaryColumn()
  ident: string;
  @Column()
  address: string;
  @Column()
  userName: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  age: number;
}
