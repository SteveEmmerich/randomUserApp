import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetUser } from '../../state/user.actions';
import { UserState } from '../../state/user.state';
import { User } from '../../state/user.types';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styles: [],
})
export class UserProfileComponent implements OnInit {
  user$: Observable<User>;
  constructor(private store: Store) {
    this.refreshUser();
  }

  ngOnInit(): void {
    this.user$ = this.store.select(UserState.user);
  }

  refreshUser(): void {
    this.store.dispatch(new GetUser());
  }
}
