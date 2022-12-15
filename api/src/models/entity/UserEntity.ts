import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity({name: 'users'})
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number = 0;
    
    @Column('varchar', {unique: false, nullable: false})
    name: string;

    @Column('varchar', {unique: true, nullable: false})
    email: string;

    @Column('varchar', {nullable: false})
    password: string;

    constructor(name: string, email: string, password: string){
        this.name = name;
        this.email = email;
        this.password = password;
    }

}