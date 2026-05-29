import { Routes } from '@angular/router';
import { Dash } from './dash/dash';
import { Login } from './login/login';
import { Side } from './side/side';
import { Dashboard } from './dashboard/dashboard';
import { Appointment } from './appointment/appointment';
import { Meeting } from './meeting/meeting';
import { register } from 'module';
import { Register } from './register/register';
import { Approval } from './approval/approval';
import { Permit } from './permit/permit';
import { report } from 'process';
import { Blacklist } from './blacklist/blacklist';
import { Repo } from './repo/repo';
import { Masters } from './masters/masters';


export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/login', 
		pathMatch: 'full'
	},
	{ 
		path: 'login', 
		component: Login
	},
	{
		path:'',
		component: Side,
		children:[
			{
				path:'dashboard',
				component:Dashboard,
				title:'Dashboard'
			},
			{ 
				path: 'create-appointment', 
				component: Appointment,
				title:'Create Appointment'
			},
			{
				path: 'internal-meeting', 
				component: Meeting,
				title:'Internal Meeting'
			},
			{
				path: 'masters', 
				component: Masters,
				title:'Masters'
			},
			{
				path: 'e-register', 
				component: Register,
				title:'Register'
			},
			{
				path: 'approval', 
				component: Approval,
				title:'Approval'
			},
			{
				path: 'work-permit', 
				component: Permit,
				title:'Work Permit'
			},
			{
				path: 'report', 
				component: Repo,
				title:'Report'
			},
			{
				path: 'blacklist', 
				component: Blacklist,
				title:'Blacklist'
			},
			


		]
	},


	{ 
		path: '**', 
		redirectTo: '/login' 
	}
];
