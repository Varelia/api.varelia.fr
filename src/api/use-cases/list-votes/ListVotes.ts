import {Presenter, UseCase} from '../../../layer'
import ListVotesRequest from './ListVotesRequest'
import ListVotesResponse from './ListVotesResponse'
import {DefaultVoteRepository} from '../../domain/repositories/vote'
import {Vote} from '../../domain/entities'
import {Container} from 'typedi'

export default class ListVotes implements UseCase {
    execute(request: ListVotesRequest, output: Presenter): void {
        const voteRepository: DefaultVoteRepository = Container.get(DefaultVoteRepository)
        const votes: Vote[] = voteRepository.fetchAllWithLimit(request.limit)

        const listVotesResponse: ListVotesResponse = new ListVotesResponse(votes, [])
        output.present(listVotesResponse)
    }
}