import {Presenter, UseCase} from '../../../layer'
import ListVotesRequest from './ListVotesRequest'
import {VoteRepository} from '../../domain/repositories'
import {getCustomRepository} from 'typeorm'
import {Voter} from '../../domain/fake-entities'
import ListVotesResponse from './ListVotesResponse'

export default class ListVotes implements UseCase {
    async execute(request: ListVotesRequest, output: Presenter): Promise<void> {
        const voteRepository: VoteRepository = getCustomRepository(VoteRepository)
        const voters: Voter[] = await voteRepository.findAndGroupByNickname().execute()

        const listVotesResponse: ListVotesResponse = new ListVotesResponse(voters, [])
        output.present(listVotesResponse)
    }
}