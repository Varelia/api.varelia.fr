import {BodyParam, Get, JsonController, Param, Post} from 'routing-controllers'
import {ListVotes, ListVotesPresenter, ListVotesRequest} from '../../use-cases/list-votes'
import {JsonView} from '../../../layer'
import AddVoteRequest from '../../use-cases/add-vote/AddVoteRequest'
import AddVotePresenter from '../../use-cases/add-vote/AddVotePresenter'
import AddVote from '../../use-cases/add-vote/AddVote'

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

}