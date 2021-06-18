import {BodyParam, Delete, Get, JsonController, Param, Post} from 'routing-controllers'
import {ListVotes, ListVotesPresenter, ListVotesRequest} from '../../use-cases/list-votes'
import {JsonView} from '../../../layer'
import {AddVote, AddVotePresenter, AddVoteRequest} from '../../use-cases/add-vote'
import {DeleteVote, DeleteVotePresenter, DeleteVoteRequest} from '../../use-cases/delete-vote'

@JsonController('/vote')
export default class VoteController {

    @Get('/list/:limit')
    public async getVotes(@Param('limit') limit: number) {
        const listVotesRequest: ListVotesRequest = new ListVotesRequest(limit)
        const listVotesPresenter: ListVotesPresenter = new ListVotesPresenter()

        const jsonView: JsonView = new JsonView()
        const listVotes: ListVotes = new ListVotes()

        await listVotes.execute(listVotesRequest, listVotesPresenter)
        return jsonView.generate(listVotesPresenter.viewModel())
    }

    @Post('/')
    public async addVote(@BodyParam('nickname') nickname: string) {
        const addVoteRequest: AddVoteRequest = new AddVoteRequest(nickname)
        const addVotePresenter: AddVotePresenter = new AddVotePresenter()

        const jsonView: JsonView = new JsonView()
        const addVote: AddVote = new AddVote()

        await addVote.execute(addVoteRequest, addVotePresenter)
        return jsonView.generate(addVotePresenter.viewModel())
    }

    @Delete('/:id')
    public async deleteVote(@Param('id') id: number) {
        const deleteVoteRequest: DeleteVoteRequest = new DeleteVoteRequest(id)
        const deleteVotePresenter: DeleteVotePresenter = new DeleteVotePresenter()

        const jsonView: JsonView = new JsonView()
        const deleteVote: DeleteVote = new DeleteVote()

        await deleteVote.execute(deleteVoteRequest, deleteVotePresenter)
        return jsonView.generate((deleteVotePresenter.viewModel()))
    }

}