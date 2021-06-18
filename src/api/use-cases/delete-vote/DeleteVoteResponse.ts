import {Response} from '../../../layer'

export default class DeleteVoteResponse extends Response {
    constructor(
        _errors: string[]
    ) {
        super(_errors)
    }
}