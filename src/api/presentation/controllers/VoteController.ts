import {Get, JsonController, Param} from 'routing-controllers'
import {ListVotes, ListVotesPresenter, ListVotesRequest} from '../../use-cases/list-votes'
import {JsonView} from '../../../layer'

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

}