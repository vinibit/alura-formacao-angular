import { FormGroup, ValidatorFn } from '@angular/forms';

export const userNamePassword: ValidatorFn = (formGroup: FormGroup) => {
    const userName: string = formGroup.get('userName').value;
    const password: string = formGroup.get('password').value;
    
    if (!(userName.trim() + password.trim())) return null;

    return userName != password 
        ? null 
        : { userNamePassword: true }
}