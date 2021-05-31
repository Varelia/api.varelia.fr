import {Response} from '../../../layer'

export default class ListVotesResponse extends Response {
    constructor(
        private _votes: {}[],
        _errors: string[]
    ) {
        super(_errors)
    }

    public get votes(): {}[] {
        return this._votes
    }
}