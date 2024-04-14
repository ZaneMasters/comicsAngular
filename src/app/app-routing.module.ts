import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { ComicsComponent } from './comics/comics.component';

const routes: Routes = [ 
  {path: 'home', component:SuperheroesComponent},
  {path: 'comics/:id', component:ComicsComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: SuperheroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
