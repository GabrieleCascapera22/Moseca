import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { CanzoniComponent } from './components/canzoni/canzoni.component';
import { HomeComponent } from './components/home/home.component';
import { TestoComponent } from './components/canzoni/testo/testo.component';
import { CanzoniListComponent } from './components/canzoni/canzoni-list/canzoni-list.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { RegistrationComponent } from './components/users/registration/registration.component';
import { NuovaCanzoneComponent } from './components/canzoni/nuova-canzone/nuova-canzone.component';
import { LoginComponent } from './components/users/login/login.component';
import { ProfiloComponent } from './components/users/profilo/profilo.component';
import { LoggedInGuard } from './components/logged-in.guard';
import { RisultatoComponent } from './components/canzoni/risultato/risultato.component';
import { AutoriComponent } from './components/autori/autori.component';
import { ListaCanzoniComponent } from './components/canzoni/lista-canzoni/lista-canzoni.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'categoria/:category',component:CategoriaComponent},
{path:'registrazione',component:RegistrationComponent},
{path:'autori',component:AutoriComponent},
{path:'canzoni',component:CanzoniComponent,children:[
{path:'lista-canzoni/:autore',component:ListaCanzoniComponent},
{path:'testo/:_id',component:TestoComponent},
{path:'risultato',component:RisultatoComponent},
{path:"nuova-canzone",component:NuovaCanzoneComponent,canActivate: [LoggedInGuard]},
{path:'',pathMatch:'full',component:CanzoniListComponent}
]},
{path:'login',component:LoginComponent},
{path:'profilo',component:ProfiloComponent,canActivate: [LoggedInGuard]},
{path:'**',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

