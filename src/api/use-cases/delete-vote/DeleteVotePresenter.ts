import {Presenter, ViewModel} from '../../../layer'
import DeleteVoteResponse from './DeleteVoteResponse'

export default class DeleteVotePresenter implements Presenter {
    present(response: DeleteVoteResponse): void {
    }

    viewModel(): ViewModel {
        return new ViewModel(200, {})
    }

}