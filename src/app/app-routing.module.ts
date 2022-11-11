import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanzoniComponent } from './components/canzoni/canzoni.component';
import { HomeComponent } from './components/home/home.component';
import { TestoComponent } from './components/canzoni/testo/testo.component';
import { CanzoniListComponent } from './components/canzoni/canzoni-list/canzoni-list.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'canzoni',component:CanzoniComponent,children:[
{path:'testo/:_id',component:TestoComponent},
{path:'',pathMatch:'full',component:CanzoniListComponent}
]},
{path:'**',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
