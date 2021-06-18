import {Presenter, UseCase} from '../../../layer'
import UpdateVoteRequest from './UpdateVoteRequest'
import {VoteRepository} from '../../domain/repositories'
import {getCustomRepository} from 'typeorm'
import {Vote} from '../../domain/entities'
import UpdateVoteResponse from './UpdateVoteResponse'

export default class ListVotes implements UseCase {
    async execute(request: UpdateVoteRequest, output: Presenter): Promise<void> {
        const voteRepository: VoteRepository = getCustomRepository(VoteRepository)
        let vote: Vote = await voteRepository.findById(request.id)

        vote.nickname = request.nickname
        vote = await voteRepository.save(vote)

        const updateVoteResponse: UpdateVoteResponse = new UpdateVoteResponse(vote, [])
        output.present(updateVoteResponse)
    }
}