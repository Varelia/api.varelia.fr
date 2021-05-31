import {define} from 'typeorm-seeding'
import User from '../entities/User'

define(User, () => new User())