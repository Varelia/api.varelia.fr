import {EntityRepository, Repository} from 'typeorm'
import {Vote} from '../entities'

@EntityRepository(Vote)
export default class VoteRepository extends Repository<Vote> {

    findAndGroupByNickname(limit: number = 15) {
        return this.createQueryBuilder()
            .select('nickname')
            .addSelect('COUNT(nickname)', 'votes')
            .groupBy('nickname')
            .orderBy('votes', 'DESC')
            .limit(limit)
    }

}