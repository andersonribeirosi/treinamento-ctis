import { AbstractControl, Validators } from '@angular/forms';

export class Validations {
    
  static required(control: AbstractControl) {
    return Validators.required(control) ? { required: true, message: `Campo obrigatório` } : null;
  };
}