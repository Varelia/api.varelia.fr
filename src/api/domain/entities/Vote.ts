import {BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class Vote {

    @PrimaryGeneratedColumn()
    public id!: number

    @Column({
        length: 16
    })
    nickname!: string

    @Column()
    address!: string

    @Column()
    created_at!: Date;

    @BeforeInsert()
    public addCreatedAt(): void {
        this.created_at = new Date()
    }

}