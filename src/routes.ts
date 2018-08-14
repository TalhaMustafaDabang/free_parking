import { Routes } from "../node_modules/@angular/router";
import { AdminLoginPanelComponent } from "./app/admin-login-panel/admin-login-panel.component";
import { UserLoginPanelComponent } from "./app/user-login-panel/user-login-panel.component";
import { FeedbackFormComponent } from "./app/feedback-form/feedback-form.component";
import { FeedbackReviewComponent } from "./app/admin-panel/feedback-review/feedback-review.component";
import { ParkingAreasComponent } from "./app/parking-areas/parking-areas.component";
import { UserListComponent } from "./app/admin-panel/user-list/user-list.component";
import { AboutComponent } from "./app/about/about.component";
import { UserRegistrationPanelComponent } from "./app/user-registration-panel/user-registration-panel.component";
import { AreaOneComponent } from "./app/parking-areas/area-one/area-one.component";
import { AreaTwoComponent } from "./app/parking-areas/area-two/area-two.component";
import { AreaThreeComponent } from "./app/parking-areas/area-three/area-three.component";
import { UserProfileComponent } from "./app/user-profile/user-profile.component";
import { UserPageComponent } from "./app/user-page/user-page.component";
import { AuthenticationGuardService } from '../src/app/services/authentication-guard.service';



export const router: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about'
    },
    {
        path: 'admin-login',
        component: AdminLoginPanelComponent,
    },
    {
        path: 'user-login',
        component: UserLoginPanelComponent,
    },
    {
        path: 'user-profile',
        component: UserProfileComponent,
        canActivate: [AuthenticationGuardService],
    },
    {
        path: 'user-page',
        component: UserPageComponent,
        canActivate: [AuthenticationGuardService],
    },
    {
        path: 'feedback-form',
        component:FeedbackFormComponent,
        
        canActivate: [AuthenticationGuardService],
    },
    {
        path: 'feedback-review',
        component:FeedbackReviewComponent,
        canActivate: [AuthenticationGuardService],
    },
    {
        path: 'parking-area',
        component: ParkingAreasComponent,
        
        canActivate: [AuthenticationGuardService],
        children:
        [
            {
                 path: 'parking-area-1',
                 component: AreaOneComponent,
                
            },
            {
                path: 'parking-area-2',
                component: AreaTwoComponent,
                
            },
            {
                path: 'parking-area-3',
                component: AreaThreeComponent,
                
            },
         
        ]
    },
    {
        path: 'user-list',
        component:UserListComponent,
        canActivate: [AuthenticationGuardService],
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'registration',
        component:UserRegistrationPanelComponent,
    },
]