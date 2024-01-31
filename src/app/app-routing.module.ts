import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { GenersListComponent } from './components/geners/geners-list/geners-list.component';
import { AddGenerComponent } from './components/geners/add-geners/add-geners.component';
import { ArtistsListComponent } from './components/artists/artists-list/artist-list.component';
import { AddArtistComponent } from './components/artists/add-artists/add-artist.component';
import { SongsListComponent } from './components/songs/songs-list/song-list.component';
import { AddSongComponent } from './components/songs/add-songs/add-song.component';
import { AlbumsListComponent } from './components/albums/albums-list/album-list.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  {
    path: 'admin',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent },
      { path: 'geners', component: GenersListComponent },
      { path: 'geners/add', component: AddGenerComponent },
      { path: 'artists', component: ArtistsListComponent },
      { path: 'artists/add', component: AddArtistComponent },
      { path: 'songs', component: SongsListComponent },
      { path: 'songs/add', component: AddSongComponent },
      { path: 'albums', component: AlbumsListComponent },
    ],
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./client-routing.module').then((m) => m.ClientRoutingModule),
  },
  { path: '**', redirectTo: 'client/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
