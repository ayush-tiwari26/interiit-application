import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity({name: "files"})
export class FileEntity{
    @PrimaryGeneratedColumn()
    id: number = 0;
    @Column("varchar", {nullable:false})
    userEmail: string = "";
    @Column('varchar',{unique: true})
    name: string = "";
    @Column("bytea", {nullable:false})
    fileData: string = "";
    @Column("varchar", {nullable:false})
    mimeType: string = "";
    constructor(name: string, fileData: string, mimeType: string) {
        this.name = name;
        this.fileData = fileData;
        this.mimeType = mimeType;
    }
}