import {Response} from '../../../layer'
import {Vote} from '../../domain/entities'

export default class ListVotesResponse extends Response {
    constructor(
        private _votes: Vote[],
        _errors: string[]
    ) {
        super(_errors)
    }

    public get votes(): Vote[] {
        return this._votes
    }
}