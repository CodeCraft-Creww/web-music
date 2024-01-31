// client-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientLayoutComponent } from './client/container/client-layout/client-layout.component';
import { HomeComponent } from './client/component/home/home.component';
import { ArtistComponent } from './client/component/artist/artist.component';
import { SongsPageComponent } from './client/component/songs-page/songs-page.component';
import { Top100PageComponent } from './client/component/top100-page/top100-page.component';
import { ChartPageComponent } from './client/component/chart-page/chart-page.component';
import { LoginPageComponent } from './client/component/login-page/login-page.component';
import { RegisterPageComponent } from './client/component/register-page/register-page.component';
import { AlbumDetailPageComponent } from './client/component/album-detail-page/album-detail-page.component';
import { ArtistDetailPageComponent } from './client/component/artist-detail-page/artist-detail-page.component';
import { VarifyEmailComponent } from './client/component/varify-email/varify-email.component';
import { MyPlaylistPageComponent } from './client/component/my-playlist-page/my-playlist-page.component';

const clientRoutes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'artist', component: ArtistComponent },
      { path: 'songs-page', component: SongsPageComponent },
      { path: 'top100-page', component: Top100PageComponent },
      { path: 'charts-page', component: ChartPageComponent },
      { path: 'album-detail-page/:id', component: AlbumDetailPageComponent },
      { path: 'artist-detail-page/:id', component: ArtistDetailPageComponent },
      { path: 'my-playlist', component: MyPlaylistPageComponent },
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: 'varify-email',
    component: VarifyEmailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(clientRoutes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
