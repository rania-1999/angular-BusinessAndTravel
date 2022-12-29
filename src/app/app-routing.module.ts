import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComplainComponent } from './add-complain/add-complain.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { AuthGuard } from './auth/auth.guard';
import { AventComponent } from './avent/avent.component';
import { BackHomeComponent } from './back-home/back-home.component';
import { BannedUsersComponent } from './banned-users/banned-users.component';
import { BestpostComponent } from './bestpost/bestpost.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ComplainListComponent } from './complain-list/complain-list.component';
import { EventComponent } from './event/event.component';
import { FollowersComponent } from './followers/followers.component';

import { HomeComponent } from './home/home.component';
import { InvitationComponent } from './invitation/invitation.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { PostComponent } from './post/post.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { DownloadExcelComponent } from './project/download-excel/download-excel.component';
import { ProjectComponent } from './project/project.component';
import { QuestionComponent } from './question/question.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { StatsComponent } from './stats/stats.component';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';
import { TaskComponent } from './task/task.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { TravelEmployeeComponent } from './travel-employee/travel-employee.component';
import { TravelComponent } from './travel/travel.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'user',component:UserComponent,
  children:[
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent}
  ]},
  {path:'home',component:HomeComponent},
  
  {path:'profil',component:ProfilComponent,canActivate:[AuthGuard]},
  {path:'post',component:PostComponent},
  {path:'travel',component:TravelComponent ,canActivate:[AuthGuard],data :{permittedRoles:['ROLE_ENTREPRISE'] }},
  {path:'travelEmployee',component:TravelEmployeeComponent ,canActivate:[AuthGuard],data :{permittedRoles:['ROLE_EMPLOYEE'] }},
  {path:"changePassword/:id", component:ChangePasswordComponent},
  {path:'invitations',component:InvitationsComponent,canActivate:[AuthGuard],data :{permittedRoles:['ROLE_ENTREPRISE'] }},
  {path:"invitation/:id", component:InvitationComponent},
  {path:"mostlikedpost", component:BestpostComponent},
  {path:"userSearch/:name", component:SearchUserComponent},
  {path:"profiles/:id", component:ProfilesComponent},
  {path:"travelDetails/:id", component:TravelDetailComponent},
  {path:'followers',component:FollowersComponent,canActivate:[AuthGuard]},
  {path:'complainList',component:ComplainListComponent},
  {path:'addcomplain',component:AddComplainComponent},
  {path:'quizlist',component:QuizListComponent,canActivate:[AuthGuard]},
  {path:'addquiz',component:AddquizComponent,canActivate:[AuthGuard],data :{permittedRoles:['ROLE_ENTREPRISE'] }},
  {path:'questions/:id',component:QuestionComponent},
  {path:'stats',component:StatsComponent},
  {path:'bannedUsers',component:BannedUsersComponent,canActivate:[AuthGuard],data :{permittedRoles:['ROLE_ENTREPRISE'] }},
  {path:'schedular', component:SyncfusionComponent,canActivate:[AuthGuard]},
  {path:'tasks',component:TaskComponent,canActivate:[AuthGuard],data :{permittedRoles:['ROLE_EMPLOYEE'] }},
  {path:'project', component:ProjectComponent,canActivate:[AuthGuard]},
  {path:'homeBack', component:BackHomeComponent,canActivate:[AuthGuard]},
  {path:'event',component:EventComponent ,canActivate:[AuthGuard] },
  {path:'avent',component:AventComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
