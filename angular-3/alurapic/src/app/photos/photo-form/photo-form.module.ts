import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photo-form.component';
import { PhotoModule } from '../photo/photo.module';
import { VMessageModule } from '../../shared/components/vmessage/vmessage.module';
import { ImmediateClickModule } from '../../shared/directives/immediate-click/immediate-click.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        PhotoModule,
        ImmediateClickModule
    ]
})
export class PhotoFormModule { }