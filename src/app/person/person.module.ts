import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularmaterialModule } from '../angularmaterial/angularmaterial.module';



@NgModule({
  declarations: [
    PersonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularmaterialModule
  ],
  exports:[
    PersonComponent
  ]
})
export class PersonModule { }
