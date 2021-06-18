import {BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export default class User {

    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        length: 16,
        unique: true
    })
    nickname!: string

    @Column()
    password!: string

    @Column({default: false})
    admin!: boolean

    @Column()
    created_at!: Date

    @Column()
    updated_at!: Date

    @BeforeInsert()
    public addDates() {
        this.created_at = new Date()
        this.updated_at = new Date()
    }

    @BeforeUpdate()
    public modifyUpdatedAt() {
        this.updated_at = new Date()
    }

}