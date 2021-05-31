import {Presenter, ViewModel} from '../../../layer'
import ListVotesResponse from './ListVotesResponse'
import {Voter} from '../../domain/fake-entities'

export default class ListVotesPresenter implements Presenter {

    private _voters: Voter[] = []

    present(response: ListVotesResponse): void {
        this._voters = response.voters
    }

    viewModel(): ViewModel {
        return new ViewModel(200, this._voters)
    }

}