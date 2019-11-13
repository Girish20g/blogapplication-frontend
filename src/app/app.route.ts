import {Routes} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {HomeComponent} from './home/home.component';
import {AddPostComponent} from './add-post/add-post.component';
import {MyprofileComponent} from './myprofile/myprofile.component';

export const MAIN_ROUTES: Routes = [
  {
    path: '', redirectTo: '/sign_in', pathMatch: 'full'
  },
  {
    path: 'sign_up',
    component: SignUpComponent
  },
  {
    path: 'sign_in',
    component: SignInComponent
  },
  {
    path: 'addpost',
    component: AddPostComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'myprofile',
    component: MyprofileComponent
  }
];
