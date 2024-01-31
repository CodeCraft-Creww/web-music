import { NgModule } from '@angular/core';
import {
  HashLocationStrategy,
  LocationStrategy,
  PathLocationStrategy,
} from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { NgScrollbarModule } from 'ngx-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';

import {
  AlertModule,
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalToggleDirective,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule,
} from '@coreui/angular';
import { environment } from '../environments/environment';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { GenersListComponent } from './components/geners/geners-list/geners-list.component';
import { GenerDetailsComponent } from './components/geners/gener-details/gener-details.component';
import { AddGenerComponent } from './components/geners/add-geners/add-geners.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { TableModule } from 'primeng/table';
import { ArtistsListComponent } from './components/artists/artists-list/artist-list.component';
import { AddArtistComponent } from './components/artists/add-artists/add-artist.component';
import { ArtistDetailsComponent } from './components/artists/artists-details/artist-details.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { Dropdown } from 'primeng/dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { SongsListComponent } from './components/songs/songs-list/song-list.component';
import { AddSongComponent } from './components/songs/add-songs/add-song.component';
import { SongDetailsComponent } from './components/songs/songs-details/song-details.component';
import { SongModalsComponent } from './components/songs/songs-modal/song-modal.component';
import { AlbumsListComponent } from './components/albums/albums-list/album-list.component';
import { AlbumModalsComponent } from './components/albums/albums-modal/album-modal.component';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ClientLayoutComponent } from './client/container/client-layout/client-layout.component';
import { ClientHeaderComponent } from './client/container/client-layout/client-header/client-header.component';
import { ClientFooterComponent } from './client/container/client-layout/client-footer/client-footer.component';
import { HomeComponent } from './client/component/home/home.component';
import { ArtistComponent } from './client/component/artist/artist.component';
import { ClientHomeComponent } from './client/container/client-layout/client-home/client-home.component';
import { MusicPlayerComponent } from './client/component/home/music-player/music-player.component';
import { MusicListComponent } from './client/component/home/music-list/music-list.component';
import { SongsComponent } from './client/component/home/songs/songs.component';
import { Top100Component } from './client/component/home/top100/top100.component';
import { AlbumsComponent } from './client/component/home/albums/albums.component';
import { SongsPageComponent } from './client/component/songs-page/songs-page.component';
import { Top100PageComponent } from './client/component/top100-page/top100-page.component';
import { ChartPageComponent } from './client/component/chart-page/chart-page.component';
import { FeatureArtistComponent } from './client/component/artist/feature-artist/feature-artist.component';
import { ArtistsComponent } from './client/component/artist/artists/artists.component';
import { LoginPageComponent } from './client/component/login-page/login-page.component';
import { RegisterPageComponent } from './client/component/register-page/register-page.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AlbumDetailPageComponent } from './client/component/album-detail-page/album-detail-page.component';
import { ArtistDetailPageComponent } from './client/component/artist-detail-page/artist-detail-page.component';
import { AudioPlayerComponent } from './client/container/client-layout/audio-player/audio-player.component';
import { VarifyEmailComponent } from './client/component/varify-email/varify-email.component';
import { MyPlaylistPageComponent } from './client/component/my-playlist-page/my-playlist-page.component';
import { AudioMysongComponent } from './client/container/client-layout/audio-mysong/audio-mysong.component';
//import { UploadFormComponent } from './components/upload-form/upload-form.component';

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
  GenersListComponent,
  GenerDetailsComponent,
  AddGenerComponent,

  ArtistsListComponent,
  ArtistDetailsComponent,
  AddArtistComponent,

  SongsListComponent,
  SongDetailsComponent,
  AddSongComponent,
  SongModalsComponent,

  AlbumsListComponent,
  AlbumModalsComponent,
  ClientLayoutComponent,
  ClientHeaderComponent,
  ClientFooterComponent,

  HomeComponent,
  ArtistComponent,
  ClientHomeComponent,

  MusicPlayerComponent,
  MusicListComponent,
  SongsComponent,
  Top100Component,
  AlbumsComponent,

  SongsPageComponent,
  Top100PageComponent,
  ChartPageComponent,

  FeatureArtistComponent,
  ArtistsComponent,

  LoginPageComponent,
  RegisterPageComponent,
  //UploadFormComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    AlbumDetailPageComponent,
    ArtistDetailPageComponent,
    AudioPlayerComponent,
    VarifyEmailComponent,
    MyPlaylistPageComponent,
    AudioMysongComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for firestore
    TableModule,
    MultiSelectModule,
    DropdownModule,
    NgSelectModule,
    AlertModule,
    ModalComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalToggleDirective,
    CalendarModule,
    ConfirmPopupModule,
    AngularFireStorageModule,
    //AngularFireAuthModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
    },
    IconSetService,
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
