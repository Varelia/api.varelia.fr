import {Get, JsonController} from 'routing-controllers'

@JsonController('/vote')
export default class VoteController {

    @Get('/')
    public getVotes() {
        return {}
    }

}