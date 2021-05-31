import {Presenter, ViewModel} from '../../../layer'
import {Vote} from '../../domain/entities'
import ListVotesResponse from './ListVotesResponse'

interface IVoteModel {
    nickname: string
    votes: number
    id: number
}

export default class ListVotesPresenter implements Presenter {

    private _votes: IVoteModel[] = []

    present(response: ListVotesResponse): void {
        this._votes = response.votes.map(
            (vote: any) => ({nickname: vote.nickname, votes: vote.votes, id: vote.id})
        )
    }

    viewModel(): ViewModel {
        return new ViewModel(200, this._votes)
    }

}