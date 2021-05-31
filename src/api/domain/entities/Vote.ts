import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class Vote {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 16
    })
    nickname!: string

    @Column()
    address!: string

    @Column()
    created_at!: Date;
}