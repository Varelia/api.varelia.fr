import {Factory, Seeder} from 'typeorm-seeding'
import {Connection} from 'typeorm'
import User from '../entities/User'
import sha256 from 'crypto-js/sha256'

export default class CreateAdminSeed implements Seeder {
    async run(factory: Factory, connection: Connection): Promise<void> {
        await factory(User)().createMany(1, {
            nickname: 'admin',
            password: sha256(process.env.ADMIN_DEFAULT_PASSWORD as string).toString(),
            admin: true,
        })
    }

}