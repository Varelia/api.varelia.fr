import {Factory, Seeder} from 'typeorm-seeding'
import {Connection} from 'typeorm'
import {Vote} from '../entities'

export default class CreateVotesSeed implements Seeder {
    async run(factory: Factory, connection: Connection): Promise<void> {
        await factory(Vote)().createMany(500, {nickname: 'Lucas__Lks', address: '127.0.0.1'})
        await factory(Vote)().createMany(250, {nickname: 'Lakorah', address: '127.0.0.1'})
        await factory(Vote)().createMany(100, {nickname: 'Pixu_', address: '127.0.0.1'})
        await factory(Vote)().createMany(50, {nickname: 'Zerqua_', address: '127.0.0.1'})
        await factory(Vote)().createMany(25, {nickname: 'Saisaka', address: '127.0.0.1'})
    }

}