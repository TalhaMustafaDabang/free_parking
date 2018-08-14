import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { DatabaseService } from './services/database.service';
import { AdminLoginPanelComponent } from './admin-login-panel/admin-login-panel.component';
import { UserRegistrationPanelComponent } from './user-registration-panel/user-registration-panel.component';
import { UserLoginPanelComponent } from './user-login-panel/user-login-panel.component';
import { ParkingAreasComponent } from './parking-areas/parking-areas.component';
import { AreaOneComponent } from './parking-areas/area-one/area-one.component';
import { AreaTwoComponent } from './parking-areas/area-two/area-two.component';
import { AreaThreeComponent } from './parking-areas/area-three/area-three.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackReviewsComponent } from './feedback-reviews/feedback-reviews.component';
import { UsersListComponent } from './users-list/users-list.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserListComponent } from './admin-panel/user-list/user-list.component';
import { BookedParkingsComponent } from './admin-panel/booked-parkings/booked-parkings.component';
import { FeedbackReviewComponent } from './admin-panel/feedback-review/feedback-review.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReciptService } from './services/recipt.service';
import { RouterModule } from '../../node_modules/@angular/router';
import { router } from '../routes';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { AngularFireDatabaseModule } from '../../node_modules/angularfire2/database';
import { TimingModalComponent } from './parking-areas/timing-modal/timing-modal.component';
import { ModelsService } from './services/models.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HttpClient } from '../../node_modules/@types/selenium-webdriver/http';
import { UserPageComponent } from './user-page/user-page.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginPanelComponent,
    UserRegistrationPanelComponent,
    UserLoginPanelComponent,
    ParkingAreasComponent,
    AreaOneComponent,
    AreaTwoComponent,
    AreaThreeComponent,
    FeedbackFormComponent,
    FeedbackReviewsComponent,
    UsersListComponent,
    AdminPanelComponent,
    UserListComponent,
    BookedParkingsComponent,
    FeedbackReviewComponent,
    AboutComponent,
    NavbarComponent,
    HomeComponent,
    TimingModalComponent,
    UserProfileComponent,
    UserPageComponent
  ],
  imports: [
   HttpClientModule,
HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot(router),
    BrowserModule,
    AngularFireDatabaseModule,
    FormsModule,
    
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [,ModelsService,AuthenticationService,AuthenticationGuardService,DatabaseService,ReciptService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(ngRedux:NgRedex<>){

  // }
}
