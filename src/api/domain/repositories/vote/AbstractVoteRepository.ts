export default abstract class AbstractVoteRepository {
    abstract fetchAllWithLimit(limit: number): {
        id: number,
        nickname: string,
        votes: number,
    }[]
}