import AbstractVoteRepository from './AbstractVoteRepository'
import {Vote} from '../../entities'
import {Service} from 'typedi'

@Service()
export default class MongoVoteRepository extends AbstractVoteRepository {

    fetchAllWithLimit(limit: number): {
        id: number,
        nickname: string,
        votes: number,
    }[] {
        const votes = [
            {
                nickname: 'Lucas__Lks',
                votes: 458,
                id: 1
            },
            {
                nickname: 'Lakorah',
                votes: 423,
                id: 2
            },
            {
                nickname: 'Pixu_',
                votes: 348,
                id: 3
            },
            {
                nickname: 'Yxalit',
                votes: 256,
                id: 4
            },
            {
                nickname: 'TryBack_',
                votes: 250,
                id: 5
            },
            {
                nickname: 'WySix_',
                votes: 234,
                id: 6
            },
            {
                nickname: 'SyncToYou',
                votes: 214,
                id: 7
            },
            {
                nickname: 'Saisaka',
                votes: 206,
                id: 8
            },
            {
                nickname: 'Zerqua_',
                votes: 178,
                id: 9
            },
            {
                nickname: 'Volgaar',
                votes: 165,
                id: 10
            },
            {
                nickname: 'Humanist',
                votes: 146,
                id: 11
            },
            {
                nickname: 'OverSnif',
                votes: 134,
                id: 12
            },
            {
                nickname: 'Odann_',
                votes: 112,
                id: 13
            },
            {
                nickname: 'dzinson',
                votes: 95,
                id: 14
            },
            {
                nickname: 'Keiwxe',
                votes: 55,
                id: 15
            },
        ]

        return votes
            .map(vote => ({
                id: vote.id,
                nickname: vote.nickname,
                votes: vote.votes,
            }))
            .slice(0, limit)
    }

}