import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RaporCompenent } from './components/rapor/rapor.component';

const routes:Routes=[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'rapors',component:RaporCompenent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
