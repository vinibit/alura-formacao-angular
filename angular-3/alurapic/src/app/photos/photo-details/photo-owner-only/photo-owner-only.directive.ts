import { Directive, Input, OnInit, Renderer, ElementRef } from "@angular/core";
import { Photo } from "../../photo/photo";
import { UserService } from "../../../core/user/user.service";

@Directive({
    selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {

    @Input() ownedPhoto: Photo;

    constructor(
        private userService: UserService,
        private renderer: Renderer, 
        private element: ElementRef<any>
    ) {}

    ngOnInit(): void {
        this.userService
            .getUser()
            .subscribe(user => {
                if (!user || user.id != this.ownedPhoto.userId) {
                    this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
                }
            });
    }

    
}