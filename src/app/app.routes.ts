import { Routes } from '@angular/router';
import { HomeComponent } from './components/candidate/home/home.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { RecruiterListComponent } from './components/admin/recruiter-list/recruiter-list.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { AppliedJobsComponent } from './components/candidate/applied-jobs/applied-jobs.component';
import { ApplyJobComponent } from './components/candidate/apply-job/apply-job.component';
import { ChatComponent } from './components/candidate/chat/chat.component';
import { LoginComponent } from './components/candidate/login/login.component';
import { ProfilePageComponent } from './components/candidate/profile-page/profile-page.component';
import { UserPersonalProfileComponent } from './components/candidate/user-personal-profile/user-personal-profile.component';
import { ApplicationsComponent } from './components/recruiter/applications/applications.component';
import { CreateJobComponent } from './components/recruiter/create-job/create-job.component';
import { EditJobComponent } from './components/recruiter/edit-job/edit-job.component';
import { InterviewsComponent } from './components/recruiter/interviews/interviews.component';
import { JobApplicantsComponent } from './components/recruiter/job-applicants/job-applicants.component';
import { MessagesComponent } from './components/recruiter/messages/messages.component';
import { RecruiterHomeComponent } from './components/recruiter/recruiter-home/recruiter-home.component';
import { RecruiterLoginComponent } from './components/recruiter/recruiter-login/recruiter-login.component';
import { RecruiterProfilePageComponent } from './components/recruiter/recruiter-profile-page/recruiter-profile-page.component';
import { RecruiterProfileComponent } from './components/recruiter/recruiter-profile/recruiter-profile.component';
import { VideoCallComponent } from './components/recruiter/video-call/video-call.component';
import { ChangePasswordComponent } from './components/shared/change-password/change-password.component';
import { ForgetPasswordComponent } from './components/shared/forget-password/forget-password.component';
import { LandingPageComponent } from './components/shared/landing_page/landing-page.component';
import { OtpPageComponent } from './components/shared/otp-page/otp-page.component';
import { SignupComponent } from './components/shared/signup/signup.component';
import { adminAuthGuard } from './guard/admin-auth.guard';
import { recruiterAuthGuard } from './guard/recruiter-auth.guard';
import { recruiterFalseAuthGuard } from './guard/recruiter-false-auth.guard';
import { userAuthGuard } from './guard/user-auth.guard';
import { userFalseAuth } from './guard/user-false-auth.guard';

export const routes: Routes = [
    {
        path:'',
        component:LandingPageComponent
    },
    {
        path:'landing_page',
        component:LandingPageComponent
    },
    {
        path:'signup',
        component:SignupComponent
    },
    {
        path:'otp-verify',
        component:OtpPageComponent
    },
    {
        path:'landing_page',
        component: LandingPageComponent,
        canActivate:[userFalseAuth]
    },
    {
        path:'',
        component: LandingPageComponent,
        canActivate:[userFalseAuth]

    },
    {
        path:'candidate/login',
        component:LoginComponent,
        canActivate:[userFalseAuth]
    },
    {
        path:'candidate/signup',
        component:SignupComponent
    },
    {
        path:'candidate/otp-page',
        component:OtpPageComponent
    },
    {
        path:'candidate/add-profile',
        component:UserPersonalProfileComponent,
        canActivate:[userAuthGuard]
    },
    {
        path:'candidate/profile',
        component:ProfilePageComponent,
        canActivate:[userAuthGuard]
    },
    {
        path:'candidate/home',
        component:HomeComponent,
        canActivate:[userAuthGuard]
    },
    {
        path:'candidate/forgot-password',
        component:ForgetPasswordComponent
    },
    {
        path:'candidate/reset-password',
        component:ChangePasswordComponent
    },
    {
        path:'candidate/apply-job',
        component:ApplyJobComponent,
        canActivate:[userAuthGuard]
    },
    {
        path:'candidate/applied-jobs',
        component:AppliedJobsComponent,
        canActivate:[userAuthGuard]
    },
    {
        path:'candidate/messages',
        component:ChatComponent,
        canActivate:[userAuthGuard]
    },
    {
        path:'recruiter/login',
        component:RecruiterLoginComponent,
        canActivate:[recruiterFalseAuthGuard]
    },
    {
        path:'recruiter/home',
        component:RecruiterHomeComponent,
        canActivate:[recruiterAuthGuard]
    },
    {
        path:'recruiter/profile',
        component:RecruiterProfilePageComponent,
        canActivate:[recruiterAuthGuard]
    },
    {
        path:'recruiter/add-profile',
        component:RecruiterProfileComponent,
        canActivate:[recruiterAuthGuard]
    },
    {
        path:'recruiter/create-job',
        component:CreateJobComponent,
        canActivate:[recruiterAuthGuard]
    },
    {
        path:'recruiter/edit-job',
        component:EditJobComponent,
        canActivate:[recruiterAuthGuard]
    },
    {
        path: 'recruiter/chat/:id',
        component: MessagesComponent,
        canActivate: [recruiterAuthGuard]
    },
    {
        path:'recruiter/applications',
        component:ApplicationsComponent,
        canActivate:[recruiterAuthGuard]
    },
    {
        path:'recruiter/applicants',
        component:JobApplicantsComponent,
        canActivate:[recruiterAuthGuard]
    },
    {
        path:'recruiter/chat/:recruiterId/:candidateId',
        component:MessagesComponent,
        canActivate:[recruiterAuthGuard]
    },
    {
        path:'recruiter/interviews',
        component:InterviewsComponent,
        canActivate:[recruiterAuthGuard]
    },
    {
        path:'video-call',
        component:VideoCallComponent,
    },
    {
        path:'admin/login',
        component:AdminLoginComponent
    },
    {
        path:'admin',
        component:AdminLoginComponent
    },
    {
        path:'admin/dashboard',
        component:DashboardComponent,
        canActivate:[adminAuthGuard]
    },
    {
        path:'admin/user-list',
        component:UserListComponent,
        canActivate:[adminAuthGuard]
    },
    {
        path:'admin/recruiter-list',
        component:RecruiterListComponent,
        canActivate:[adminAuthGuard]
    }
];
