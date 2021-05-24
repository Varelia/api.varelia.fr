export default class ListVotesRequest {
    constructor(
        private _limit?: number
    ) {}

    public get limit() {
        return typeof this._limit !== 'undefined' ? this._limit : 15;
    }
}