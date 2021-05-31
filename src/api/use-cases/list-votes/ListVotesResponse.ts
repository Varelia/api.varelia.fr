import {Response} from '../../../layer'
import {Voter} from '../../domain/fake-entities'

export default class ListVotesResponse extends Response {
    constructor(
        private _voters: Voter[],
        _errors: string[]
    ) {
        super(_errors)
    }

    public get voters(): Voter[] {
        return this._voters
    }
}