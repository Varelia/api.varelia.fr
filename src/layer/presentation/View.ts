import ViewModel from './ViewModel'

export default abstract class View {
    abstract generate(viewModel: ViewModel): any
}