import { Injectable } from "@angular/core";
import {  CanDeactivate } from "@angular/router";
import { PersonComponent } from "../person/person.component";



@Injectable()
export class canDeActivatePersonService implements CanDeactivate<PersonComponent>{
    constructor(){}
    canDeactivate(component: PersonComponent): boolean  {
        if(component.productForm.dirty){
            return confirm('Are you sure you want to discard your changes?.')
        }
        else{
            return true;
        }
        
    }

    
}

