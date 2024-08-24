import { Table, Column, Model, DataType } from 'sequelize-typescript';

export interface IUser {
  username: string;
  email: string;
  password: string;
}

@Table({
  timestamps: true,
})
export class User extends Model<IUser> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;
}
