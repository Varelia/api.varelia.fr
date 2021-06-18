import {Presenter, UseCase} from '../../../layer'
import AddVoteRequest from './AddVoteRequest'
import {VoteRepository} from '../../domain/repositories'
import {getCustomRepository} from 'typeorm'
import {Vote} from '../../domain/entities'
import AddVoteResponse from './AddVoteResponse'

export default class AddVote implements UseCase {
    async execute(request: AddVoteRequest, output: Presenter): Promise<void> {
        const voteRepository: VoteRepository = getCustomRepository(VoteRepository)
        let vote: Vote = new Vote()
        vote.nickname = request.nickname
        vote.address = '127.0.0.1'

        vote = await voteRepository.save(vote)

        const addVoteResponse: AddVoteResponse = new AddVoteResponse(vote, [])
        output.present(addVoteResponse)
    }
}