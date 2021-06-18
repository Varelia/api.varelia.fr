import {Presenter, ViewModel} from '../../../layer'
import {Vote} from '../../domain/entities'
import AddVoteResponse from './AddVoteResponse'

export default class AddVotePresenter implements Presenter {

    private _vote: Vote = new Vote();

    present(response: AddVoteResponse): void {
        this._vote = response.vote
    }

    viewModel(): ViewModel {
        return new ViewModel(200, this._vote)
    }

}