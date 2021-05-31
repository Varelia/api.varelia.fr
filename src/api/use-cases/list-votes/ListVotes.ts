import {Presenter, UseCase} from '../../../layer'
import ListVotesRequest from './ListVotesRequest'
import ListVotesResponse from './ListVotesResponse'
import {DefaultVoteRepository} from '../../domain/repositories/vote'
import {Container} from 'typedi'

export default class ListVotes implements UseCase {
    execute(request: ListVotesRequest, output: Presenter): void {
        const voteRepository: DefaultVoteRepository = Container.get(DefaultVoteRepository)
        const votes: {}[] = voteRepository.fetchAllWithLimit(request.limit)

        const listVotesResponse: ListVotesResponse = new ListVotesResponse(votes, [])
        output.present(listVotesResponse)
    }
}