export default class ViewModel {
    constructor(
        private _status: number,
        private _body: any
    ) { }

    public get status() : number {
        return this._status
    }

    public set status(status: number) {
        this._status = status
    }

    public get body(): any {
        return this._body
    }

    public set body(body: any) {
        this._body = body
    }
}