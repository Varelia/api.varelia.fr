export default class Vote {
    constructor(
        private _id: number,
        private _nickname: string,
        private _votes: number
    ) { }

    public get id(): number {
        return this._id
    }

    public get nickname(): string {
        return this._nickname
    }

    public set nickname(nickname: string) {
        this._nickname = nickname
    }

    public get votes(): number {
        return this._votes
    }

    public set votes(votes: number) {
        this._votes = votes
    }
}