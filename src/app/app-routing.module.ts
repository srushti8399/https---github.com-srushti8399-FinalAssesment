import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonComponent } from './person/person.component';
import { canDeActivatePersonService } from './services/canDeactivate.person.service';

const routes: Routes = [
  {path:"person",component:PersonComponent,canDeactivate:[canDeActivatePersonService]},
  {path:"",redirectTo:"person",pathMatch:'full'},
  {path:"**",component:PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
