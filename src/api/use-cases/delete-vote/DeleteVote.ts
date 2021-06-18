import {Presenter, UseCase} from '../../../layer'
import DeleteVoteRequest from './DeleteVoteRequest'
import {VoteRepository} from '../../domain/repositories'
import {getCustomRepository} from 'typeorm'
import DeleteVoteResponse from './DeleteVoteResponse'

export default class DeleteVote implements UseCase {
    async execute(request: DeleteVoteRequest, output: Presenter): Promise<void> {
        const voteRepository: VoteRepository = getCustomRepository(VoteRepository)
        await voteRepository.delete(request.id)

        const deleteVoteResponse: DeleteVoteResponse = new DeleteVoteResponse([])
        output.present(deleteVoteResponse)
    }
}