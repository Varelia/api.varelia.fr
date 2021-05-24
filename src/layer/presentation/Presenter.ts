import ViewModel from './ViewModel'

export default interface Presenter {
    present: (response: any) => void
    viewModel: () => ViewModel
}