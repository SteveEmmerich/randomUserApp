import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { UserApiService } from '../services/user-api.service';
import { User } from './user.types';
import { GetUser } from './user.actions';

@State<User>({
  name: 'user',
  defaults: null,
})
@Injectable()
export class UserState {
  @Selector()
  static user(state: User) {
    return state;
  }
  constructor(private userApi: UserApiService) {}

  @Action(GetUser)
  getUser(ctx: StateContext<User>) {
    return this.userApi.getUser().pipe(tap((users) => ctx.setState(users[0])));
  }
}
