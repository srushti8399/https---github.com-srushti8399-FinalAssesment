import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule
  ],
  exports:[MatFormFieldModule,MatSelectModule,MatInputModule,MatIconModule]
})
export class AngularmaterialModule { }
