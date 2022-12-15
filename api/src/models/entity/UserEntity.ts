import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: 'users'})
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column('varchar', {length: 255, nullable: false})
    name: string = "";

    @Column('varchar', {unique: true, length: 255})
    email: string = "";

    @Column('varchar', {nullable: false})
    password: string = "";

    constructor(name: string, email: string, password: string){
        this.name = name;
        this.email = email;
        this.password = password;
    }

}