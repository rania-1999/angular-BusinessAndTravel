import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSelectModule} from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfilComponent } from './profil/profil.component';
import { PostComponent } from './post/post.component';
import { AddpostsComponent } from './addposts/addposts.component';
import { TravelComponent } from './travel/travel.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InvitationComponent } from './invitation/invitation.component';
import { InvitationsComponent } from './invitations/invitations.component';
import { DataTableModule } from "ng2-data-table";
import {DataTablesModule} from 'angular-datatables';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CommentComponent } from './comment/comment.component';
import { TravelEmployeeComponent } from './travel-employee/travel-employee.component';
import { BestpostComponent } from './bestpost/bestpost.component';
import { ChoseDomainComponent } from './chose-domain/chose-domain.component';
import { ChoseProfessionComponent } from './chose-profession/chose-profession.component';
import {MatMenuModule} from '@angular/material/menu';
import { SearchUserComponent } from './search-user/search-user.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { FollowersComponent } from './followers/followers.component';
import { ComplainListComponent } from './complain-list/complain-list.component';
import { AddComplainComponent } from './add-complain/add-complain.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionComponent } from './question/question.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { ChangeBgDirective } from './change-bg.directive';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {  CategoryService, ChartModule, DataLabelService, LegendService, LineSeriesService } from '@syncfusion/ej2-angular-charts';
import { StatsComponent } from './stats/stats.component';
import { BannedUsersComponent } from './banned-users/banned-users.component';

import { ProjectComponent } from './project/project.component';
import { EmployeeComponent } from './employee/employee.component';
import { TaskComponent } from './task/task.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import { AssignProjectToEntrepriseComponent } from './project/assign-project-to-entreprise/assign-project-to-entreprise.component';
import { AffectEmployeeToProjectComponent } from './project/affect-employee-to-project/affect-employee-to-project.component';
import { DownloadExcelComponent } from './project/download-excel/download-excel.component';
import { AssignTaskToEmployeeComponent } from './task/assign-task-to-employee/assign-task-to-employee.component';
import { FlatpickrModule } from 'angularx-flatpickr';
//import { CalendarModule, DateAdapter } from 'angular-calendar';
//import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { SyncfusionComponent } from './syncfusion/syncfusion.component';
import { ScheduleModule, RecurrenceEditorModule , WeekService, WorkWeekService,MonthService,MonthAgendaService, DayService} from '@syncfusion/ej2-angular-schedule';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import { MatProgressBarModule } from '@angular/material/progress-bar';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { VoirPlusTaskComponent } from './task/voir-plus-task/voir-plus-task.component';
import { EditProjectComponent } from './project/edit-project/edit-project.component';
import { GetStarEmployeeComponent } from './project/get-star-employee/get-star-employee.component';
import { BackHomeComponent } from './back-home/back-home.component';
import { MatTooltipModule } from '@angular/material/tooltip';

import {MatGridListModule} from '@angular/material/grid-list';
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { NoteComponent } from './note/note.component';
import { AventComponent } from './avent/avent.component';
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ComplainListComponent,
    AddComplainComponent,
    WelcomeComponent,
    QuestionComponent,
    AddquizComponent,
    QuizComponent,
    QuizListComponent,

    //rania
    GetStarEmployeeComponent,
    ProjectComponent,
    EmployeeComponent,
    EditProjectComponent,
    AssignProjectToEntrepriseComponent,
    AffectEmployeeToProjectComponent,
    TaskComponent,
    VoirPlusTaskComponent,
    AddTaskComponent,
    EntrepriseComponent,
    DownloadExcelComponent,
    AssignTaskToEmployeeComponent,
    SyncfusionComponent,



    UserComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    ProfilComponent,
    PostComponent,
    AddpostsComponent,
    TravelComponent,
    AddTravelComponent,
    SidebarComponent,
    AdminNavComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    InvitationComponent,
    InvitationsComponent,
    CommentComponent,
    TravelEmployeeComponent,
    BestpostComponent,
    ChoseDomainComponent,
    ChoseProfessionComponent,
    SearchUserComponent,
    ProfilesComponent,
    TravelDetailComponent,
    FollowersComponent,
    ChangeBgDirective,
    StatsComponent,
    BannedUsersComponent,
    BackHomeComponent,
    EventComponent,
    AddEventComponent,
    NoteComponent,
    AventComponent,
    
    
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatIconModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    MatListModule,
    DataTablesModule,
    MatSelectModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxChartsModule,
    DragDropModule,
    ChartModule,
    
    CommonModule,
    MatProgressBarModule,
    FullCalendarModule,
    ScheduleModule, RecurrenceEditorModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    NgbModule,

    MatTooltipModule,
    MatGridListModule,




    ToastrModule.forRoot({
      progressBar: true
    }),
  ],
  providers: [UserService, {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  CategoryService, 
  LegendService, 
  DataLabelService, 
  LineSeriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
