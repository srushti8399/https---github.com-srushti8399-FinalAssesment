import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  gender = new FormControl('');
  genderList: string[] = ['Male','Female'];
  department=new FormControl('');
  departmentList: string[] = ['IT','Payroll','HR', 'Networking', 'Admin'];

  productForm!:FormGroup;
  @ViewChild('productForm') createPersonForm!:NgForm;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.productForm= this.fb.group({
      gender:["",Validators.required],
      department:["",Validators.required],
    
      firstname: ["",Validators.required],
      middlename: ["",Validators.required],
      lastname: ["",Validators.required],
      dateofbirth:["",Validators.required],
      pincode:[null,[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      address: ["",Validators.required],
      
    
    

    })
  }
  submit(){
    console.log(this.productForm);
  }

}
