import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit{

  //TODO: Creación de un formulrio reactivo
  // public myForm:FormGroup=new FormGroup({
  //   name: new FormControl('',[],[]),
  //   price: new FormControl('',[],[]),
  //   inStorage: new FormControl('',[],[])
  // })

  //TODO: Creación de un formulrio reactivo (segunda manera)
  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ] ],
    price: [0, [ Validators.required, Validators.min(0) ] ],
    inStorage: [0, [ Validators.required, Validators.min(0) ]],
  })

  constructor( private fb: FormBuilder ){} //Servicio de angularForms. Se neesita para hacer el myForm: FormGroup


  ngOnInit(): void {
       // this.myForm.reset( rtx5090 );
  }

  onSave():void {

    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset({ price: 0, inStorage: 0 });
  }

}
