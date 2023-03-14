import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("clients")
export class Client {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "text", nullable: false })
    name!: string;

    @Column({ type: "text", nullable: false, unique: true })
    email!: string;

    // CPFs are composed of 11 decimal digits, like: 75787473707
    @Column({ type: "varchar", length: 11, nullable: false, unique: true })
    cpf!: string;

    // accepts a phone with DDD and no country code, like: 3199777777
    @Column({ type: "varchar", length: 11, nullable: false })
    phone!: string;

    @CreateDateColumn()
    created_at!: Date;

}