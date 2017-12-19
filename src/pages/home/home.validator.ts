import {FormControl} from '@angular/forms';


export function agehigh(control:FormControl){

    // let  val:string = control.value;

    if(control.value.toString().length>2){
      return {'agetoohigh':true}
    }
    return null;
  

}