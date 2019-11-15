import {Routes} from '@angular/router';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {HomeComponent} from './home/home.component';
import {AddPostComponent} from './add-post/add-post.component';
import {MyprofileComponent} from './myprofile/myprofile.component';
import {BlogpageComponent} from './blogpage/blogpage.component';
import {EditBlogComponent} from './edit-blog/edit-blog.component';

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
  },
  {path: 'myprofile/:id', component: EditBlogComponent},
  {
    path: 'home/:id',
    component: BlogpageComponent
  }
];
