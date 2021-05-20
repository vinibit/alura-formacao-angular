import { NgModule } from "@angular/core";
import { PhotoDetailsComponent } from "./photo-details.component";
import { CommonModule } from "@angular/common";
import { PhotoModule } from "../photo/photo.module";
import { PhotoCommentsComponent } from "./photo-comments/photo-comments.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../../shared/components/vmessage/vmessage.module";

@NgModule({
    declarations: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent
    ],
    exports: [
        PhotoDetailsComponent, 
        PhotoCommentsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PhotoModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class PhotoDetailsModule { }