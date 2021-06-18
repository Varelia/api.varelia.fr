import {Response} from '../../../layer'
import {Vote} from '../../domain/entities'

export default class AddVoteResponse extends Response {
    constructor(
        private _vote: Vote,
        _errors: string[]
    ) {
        super(_errors)
    }

    public get vote(): Vote {
        return this._vote
    }
}