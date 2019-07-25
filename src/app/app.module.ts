import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ResumeComponent } from './resume/resume.component';
import { MyworkComponent } from './mywork/mywork.component';
import { ContactusComponent } from './contactus/contactus.component';
import {RouterModule} from '@angular/router';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { ContactListComponent } from './contact-list/contact-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutmeComponent,
    ResumeComponent,
    MyworkComponent,
    ContactusComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent
      },  
      {
        path:'aboutme',
        component:AboutmeComponent
      },
    {
      path:'resume',
      component:ResumeComponent
    },
    {
      path:'mywork',
      component:MyworkComponent
    },
    {
      path:'contactUs',
      component:ContactusComponent
    },
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
