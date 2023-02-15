import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { UploadFormComponent } from './components/upload-form/upload-form.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { UploadDetailsComponent } from './components/upload-details/upload-details.component';

import { DragAndDropComponent } from './components/drag-and-drop/drag-and-drop.component';
import { ProgressComponent } from './components/progress/progress.component';
import { DndDirective } from './direcitves/dnd.directive';

import { LoginComponent } from 'src/login/login.component';
import { CardsComponent } from 'src/cards/cards.component';
import { Cards1Component } from 'src/cards1/cards1.component';
import { Cards2Component } from 'src/cards2/cards2.component';
import { Cards3Component } from 'src/cards3/cards3.component';
import { Cards4Component } from 'src/cards4/cards4.component';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';



@NgModule({
  declarations: [
    AppComponent,
    UploadFormComponent,
    UploadListComponent,
    UploadDetailsComponent,
    DndDirective,
    DragAndDropComponent,
  ProgressComponent,
  LoginComponent,
    CardsComponent,
Cards1Component,
Cards2Component,
Cards3Component,
Cards4Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
