import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { NgxsModule } from '@ngxs/store';
import { UserState } from './state/user.state';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, NgxsModule.forFeature([UserState])],
  exports: [UserProfileComponent],
})
export class UserModule {}
