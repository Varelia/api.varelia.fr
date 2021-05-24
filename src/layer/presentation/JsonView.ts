import View from './View'
import ViewModel from './ViewModel'

export default class JsonView extends View {

    generate(viewModel: ViewModel): {status: number, body: {}} {
        return {status: viewModel.status, body: viewModel.body}
    }
}