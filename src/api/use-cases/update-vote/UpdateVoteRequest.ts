export default class UpdateVoteRequest {
    constructor(
        private _id: number,
        private _nickname: string
    ) {}

    public get id() {
        return this._id;
    }

    public get nickname() {
        return this._nickname;
    }
}