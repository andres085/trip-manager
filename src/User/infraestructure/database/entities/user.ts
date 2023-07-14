import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class UserEntity {
  constructor(
    name: string,
    lastName: string,
    ident: string,
    address: string,
    userName: string,
    password: string,
    email: string
  ) {
    this.name = name;
    this.lastName = lastName;
    this.ident = ident;
    this.address = address;
    this.userName = userName;
    this.password = password;
    this.email = email;
  }

  @Column()
  name: string;
  @Column()
  lastName: string;
  @Column()
  ident: string;
  @PrimaryColumn()
  address: string;
  @Column()
  userName: string;
  @Column()
  password: string;
  @Column()
  email: string;
}
