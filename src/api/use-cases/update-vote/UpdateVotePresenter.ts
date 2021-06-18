import {Presenter, ViewModel} from '../../../layer'
import {Vote} from '../../domain/entities'
import UpdateVoteResponse from './UpdateVoteResponse'

export default class UpdateVotePresenter implements Presenter {

    private _vote: Vote = new Vote()

    present(response: UpdateVoteResponse): void {
        this._vote = response.vote
    }

    viewModel(): ViewModel {
        return new ViewModel(200, this._vote)
    }

}