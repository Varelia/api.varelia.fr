import {Presenter} from '../'

export default interface UseCase {
    execute: (request: any, output: Presenter) => void
}