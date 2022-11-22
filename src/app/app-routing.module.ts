import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { CanzoniComponent } from './components/canzoni/canzoni.component';
import { HomeComponent } from './components/home/home.component';
import { TestoComponent } from './components/canzoni/testo/testo.component';
import { CanzoniListComponent } from './components/canzoni/canzoni-list/canzoni-list.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RegistrationComponent } from './components/users/registration/registration.component';
import { NuovaCanzoneComponent } from './components/nuova-canzone/nuova-canzone.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'categoria/:category',component:CategoriaComponent},
{path:'registrazione',component:RegistrationComponent},
{path:"nuova-canzone",component:NuovaCanzoneComponent},

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

