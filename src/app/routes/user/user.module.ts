import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { UserProfileResolver } from './resolvers/user-profile.resolver';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { UserProfileDetailsComponent } from './containers/user-profile-details/user-profile-details.component';
import { UserRecentTracksComponent } from './components/user-recent-tracks/user-recent-tracks.component';
import { UserTopTracksComponent } from './components/user-top-tracks/user-top-tracks.component';

const routes: Routes = [
  {
    path: ':user',
    component: UserProfileComponent,
    resolve: { user: UserProfileResolver },
    children: [
      { path: '', redirectTo: 'recent-tracks', pathMatch: 'full' },
      {
        path: 'recent-tracks',
        component: UserProfileDetailsComponent,
      },
    ]
  }
];

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileDetailsComponent,
    UserRecentTracksComponent,
    UserTopTracksComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
