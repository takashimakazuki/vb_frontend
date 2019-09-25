import { ModelBase } from './model-base';

export class User extends ModelBase<User> {
    username: string = null;
    name: string = null;
}
