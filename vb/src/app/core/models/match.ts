import { User } from './user';
import { ModelBase } from './model-base';

export class Match extends ModelBase<Match> {
    team1: string = null;
    team2: string = null;
    create_by: User = null;
    match_date: Date = null;
    image: string = null;

    get matchTitle(): string {
        return `${this.team1} vs ${this.team2}`;
    }

    constructor(src: Match) {
        super();
        super.setValues(src);
    }
}
