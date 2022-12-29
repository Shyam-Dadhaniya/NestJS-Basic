import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'dummy_user' })
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ length: 20 })
  name: string;
  @Column({ length: 50 })
  email: string;
  @Column('int')
  age: number;
}
