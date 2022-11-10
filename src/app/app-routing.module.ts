import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanzoniComponent } from './components/canzoni/canzoni.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'canzoni',component:CanzoniComponent},
{path:'**',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
