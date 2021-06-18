export default class AddVoteRequest {
    constructor(
        private _nickname: string
    ) {}

    public get nickname() {
        return this._nickname
    }
}