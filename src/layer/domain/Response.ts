export default class Response {
    constructor(
        private _errors: string[]
    ) {}

    public get errors(): string[] {
        return this._errors;
    }
}