import {Vote} from '../../entities'

export default abstract class AbstractVoteRepository {
    abstract fetchAllWithLimit(limit: number): Vote[]
}