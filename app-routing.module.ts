import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
   
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './Characters/Characters.component';

const routes: Routes = [
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'Characters',
      component: CharactersComponent
  }
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }