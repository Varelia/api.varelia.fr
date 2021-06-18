export default class DeleteVoteRequest {
    constructor(
        private _id: number
    ) {}

    public get id() {
        return this._id
    }
}