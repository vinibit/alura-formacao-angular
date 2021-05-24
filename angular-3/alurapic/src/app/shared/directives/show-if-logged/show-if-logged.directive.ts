import { Directive, OnInit } from "@angular/core";
import { UserService } from "../../../core/user/user.service";
import { Renderer } from "@angular/core";
import { ElementRef } from "@angular/core";

@Directive({
    selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit {
    
    constructor(
        private element: ElementRef<any>,
        private renderer: Renderer,
        private userService: UserService
    ) {}

    ngOnInit(): void {
        !this.userService.isLogged()
            && this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
    }
}